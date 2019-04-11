require('dotenv').config();
const path = require("path");
const express = require("express");
const app = express();
const {Pool} = require("pg");

// set up session
var session = require('express-session');
app.use(session({
  secret: 'my-super-secret-secret!',
  resave: false,
  saveUninitialized: true
}));

// define the controllers
const birdController = require("./controllers/birdController.js");
const loginController = require("./controllers/loginController.js");

// port for heroku || if port is undefined just set the port to 5000
const port = process.env.PORT || 5000;

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// handle bird requests
app.get("/searchByBreeder", birdController.searchByBreeder);
app.get("/searchBySpecie", birdController.searchBySpecie);
app.get("/birds", loginController.verifyLogin, birdController.getBirdList);
app.post("/addBird", loginController.verifyLogin, birdController.insertNewBird);
app.get("/deleteBird", loginController.verifyLogin, birdController.deleteBird);

// handle login requests
app.post("/register", loginController.handleRegister);
app.post("/login", loginController.handleLogin);
app.post("/logout", loginController.handleLogout);

app.listen(port, function(){
	console.log(`listening on port: ${port}`);
});