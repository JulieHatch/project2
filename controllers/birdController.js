const birdModel = require("../models/birdModel.js");

function searchByBreeder(req, res) {
	var breeder = req.query.breeder;
	birdModel.searchByBreeder(breeder, function(error, results) {
		res.json(results);
	});
}
function searchBySpecie(req, res) {
	var specie = req.query.specie;
	birdModel.searchBySpecie(specie, function(error, results) {
		res.json(results);
	});
}

function getBirdList(req, res) {
	var id = 1;
	birdModel.getAllBirds(id, function(error, results){
		res.json(results);
	});
}

function getBirdById(req, res) {
	var id = 1;
	
	birdModel.getBirdById(id, function(error, results){
		res.json(results);
	});
}

function insertNewBird(req, res) {
	
	var specie = "Turtle";
	var name = "Puma";
	var breeder = "Penny";
	var cost = 20;
	var info = "turtle dove ha";
	birdModel.insertNewBird(specie, name, breeder, cost, info, function(error, results) {
		res.json(results);
	});
}

function assignBreederToBird(req, res) {
	var specieId =1;
	var breederId =1;
	birdModel.assignBreederToBird(specieId, breederId, function(error, results) {
		res.json(results);
	});
}

module.exports = {
	searchByBreeder: searchByBreeder,
	searchBySpecie: searchBySpecie,
	getBirdList: getBirdList,
	getBirdById: getBirdById,
	insertNewBird: insertNewBird,
	assignBreederToBird: assignBreederToBird
};