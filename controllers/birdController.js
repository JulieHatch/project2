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

function insertNewBird(req, res) {
	var specie = req.body.specie;
	var name = req.body.name;
	var breeder = req.session.user;
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

module.exports = {
	searchByBreeder: searchByBreeder,
	searchBySpecie: searchBySpecie,
	getBirdList: getBirdList,
	insertNewBird: insertNewBird,
	deleteBird: deleteBird
};