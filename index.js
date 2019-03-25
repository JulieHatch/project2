const express = require("express");
const app = express();
const path = require("path");

const birdController = require("./controllers/birdController.js");
const breederController = require("./controllers/breederController.js");

// port for heroku || if port is undefined just set the port to 5000
const port = process.env.PORT || 5000;

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get("/breeders", breederController.getBreederList);
app.get("/breeder", breederController.getBreeder);
app.post("/breeder", breederController.postBreeder);


app.get("/searchByBreeder", birdController.searchByBreeder);
app.get("/searchBySpecie", birdController.searchBySpecie);
app.get("/birds", birdController.getBirdList);
app.get("/bird", birdController.getBirdById);
app.post("/bird", birdController.insertNewBird);
app.post("/assignBreederToBird", birdController.assignBreederToBird);

app.listen(port, function(){
	console.log(`listening on port: ${port}`);
});