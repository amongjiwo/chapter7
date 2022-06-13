const express = require('express');
const port = process.env.port || 8000;
const cookieParser = require('cookie-parser');
const path = require ('path');

// include session & flash
const session = require('express-session');
const flash = require('express-flash');

const app = express();

//router
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');


// Setting template engine EJS
app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//important to link css and other static file that in public folder
app.use(express.static('public'));

app.use(express.static(path.join(__dirname + '../public')));
app.use(cookieParser());

  
//Setting session passport
const passport = require('./lib/passport');
app.use(passport.initialize());
// app.use(passport.session())

//routes
app.use('/', usersRouter);
app.use('/api', apiRouter);
 
app.listen(port, () => {
  console.log(`Server nyala di port http://localhost:${port}`);
});