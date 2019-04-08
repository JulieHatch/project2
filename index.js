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

// define all the controllers
const birdController = require("./controllers/birdController.js");
const breederController = require("./controllers/breederController.js");
const loginController = require("./controllers/loginController.js");

// port for heroku || if port is undefined just set the port to 5000
const port = process.env.PORT || 5000;

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// handle breeder requests
app.get("/breeders", breederController.getBreederList);
app.get("/breeder", breederController.getBreeder);
app.post("/breeder", breederController.postBreeder);

// handle bird requests
app.get("/searchByBreeder", loginController.verifyLogin, birdController.searchByBreeder);
app.get("/searchBySpecie", loginController.verifyLogin, birdController.searchBySpecie);
app.get("/birds", loginController.verifyLogin, birdController.getBirdList);
app.get("/bird", loginController.verifyLogin, birdController.getBirdById);
app.post("/addBird", loginController.verifyLogin, birdController.insertNewBird);
app.get("/deleteBird", loginController.verifyLogin, birdController.deleteBird);
app.post("/assignBreederToBird", loginController.verifyLogin, birdController.assignBreederToBird);

// handle login requests
app.post("/register", loginController.handleRegister);
app.post("/login", loginController.handleLogin);
app.post("/logout", loginController.handleLogout);


app.listen(port, function(){
	console.log(`listening on port: ${port}`);
});