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
	var breeder = req.session.user;
	birdModel.searchByBreeder(breeder, function(error, results) {
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
	
	var specie = req.body.specie;
	var name = req.body.name;
	var breeder = req.body.breeder;
	var cost = req.body.cost;
	var info = req.body.info;
	var birth = req.body.birth;
	
	birdModel.insertNewBird(name, info, cost, birth, specie, breeder, function(error, results) {
		res.json(results);
	});
}
function deleteBird(req, res) {
	var bird_id = req.query.bird_id;
	birdModel.deleteBird(bird_id, function(error, results) {
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
	deleteBird: deleteBird,
	assignBreederToBird: assignBreederToBird
};