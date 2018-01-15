const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const authRouter = require('./routes/auth-routes');
const authHelpers = require('./services/auth/auth-helpers');
const publicRouter = require('./routes/rest-routes');
const valRouter = require('./routes/val-routes'); 
const profRouter = require('./routes/profile-route'); 
// const logout = require('express-passport-logout'); 
const PORT = process.env.PORT || 3000;

require('dotenv').config();


app.use(express.static('public'));
app.use(cookieParser(process.env.SESSION_KEY)); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended: false}))
//app.use(bodyParser.json())
// app.use(bodyParser());

app.use(session({
  secret: process.env.SESSION_KEY, // session secret
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize()); // <-- Registers the Passport middleware.
app.use(passport.session()); // persistent login sessions

// app.get('/logout', logout());
app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/'); 
	console.log("log out"); 
})


app.get('/', (req, res) => {
  res.render('index')
});

app.use(methodOverride('_method'))
app.use(morgan('dev'));

app.use('/public', publicRouter);
app.use('/auth', authRouter);
app.use('/profile', checkAuthentication, profRouter); 
app.use('/validated', checkAuthentication, valRouter);


function checkAuthentication(req,res,next){
    if(req.isAuthenticated()){
        //if user is looged in, req.isAuthenticated() will return true 
        next();
    } else{
        res.redirect("/login");
    }
}

app.use(authHelpers.loginRequired)



app.set('views', path.join(__dirname, 'views'));
app.set ('view engine', 'ejs');



app.get('/', (req, res) => {
  res.render('index')
});

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Look elsewhere as this path only leads to danger'
  })
})



  app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
  })