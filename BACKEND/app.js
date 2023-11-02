const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors")

// database
const mongoose = require("mongoose");
// just makes our life a lot easier ... no need to do much things
const dotenv = require("dotenv");
const passport = require('./routes/authentication.js');
const session = require('express-session');

var bodyParser = require('body-parser')
const multer = require('multer')
const path = require("path")
const User = require('./schema/userSchema.js');
app.use(bodyParser.urlencoded({ extended: true }));
// configuring dotenv for envrionment variables
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());
// middleware
app.use(cors())
app.use(express());

  app.get('/',(req,res)=>{
      res.send('welcome to homepage')
  })
  app.get('/login', (req, res) => {
    res.send("login failed. Will redirect to /login page later on with message login failed please try again when website is ready")
  });

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());
  

    app.post('/api/auth/signup', async (req, res) => {
        try {
          const { username, email, password } = req.body;
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            return res.status(409).send('User already exists');
          }
          const user = new User({ username, email, password });
          await user.save();
          req.login(user, (err) => {
            if (err) {
              return res.status(500).send('Error logging in after signup');
            }
            return res.redirect('/');
          });
        } catch (err) {
        console.log('Error during signup:', err);
          return res.status(500).send('Error during signup');
        }
      });
      
      app.post('/api/auth/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: false
      }));
      
      app.get('/api/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');
      });
  

      mongoose.connect('mongodb+srv://1234:1234@cluster0.v14qbxi.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
          console.log(`Server running at http://localhost:${port}`);
        });
      })
      .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
      });
  // if we use /files as path name ... go to public/images instead of making a get request

