const bcrypt = require('bcryptjs');
const User = require('../models/users.js');

const usersController = {};

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    first_name: req.body.first_name, 
    last_name: req.body.last_name, 
    userName: req.body.userName,
    password_digest: hash,
  })
  .then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/validated');
    });
  }).catch(err => {
    console.log("this is user.create", err);
    res.status(500).json({error: err});
  });
}

module.exports = usersController;