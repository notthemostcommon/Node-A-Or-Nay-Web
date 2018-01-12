const express = require('express')
const app = express(); 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const AnonymIdStrategy = require('passport-anonym-uuid').Strategy;
const util = require('util')
const init = require('./passport');
const User = require('../../models/users');
const authHelpers = require('./auth-helpers');

const options = {};

init();

passport.use(new AnonymIdStrategy());
app.get('/',
  // Authenticate using HTTP Basic credentials, with session support disabled,
  // and allow anonymous requests.
  passport.authenticate(['basic', 'anonymId'], { session: false }),
  function(req, res){
    if (req.user) {
      res.json({ username: req.user.username, email: req.user.email });
    } else {
      res.json({ anonymId: req.user.uuid });
    }
  });

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    User.findByUserName(username)
      .then(user => {
        if (!user) {
          return done(null, false);
        }
        if (!authHelpers.comparePass(password, user.password_digest)) {
          return done(null, false);
          ; 
        } else {
          console.log(user); 
          return done(null, user);

        }
      }).catch(err => {
        console.log(err);
        return done(err);
      });
  })
);





module.exports = passport;