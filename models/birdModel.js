const {Pool} = require("pg");
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString: db_url});

function searchByBreeder(breeder, callback) {
	console.log("Search for bird from: " + breeder);
	var results = {
		birds: [
			{id:1, name:"alex", breeder:breeder, cost:10, info:"test"},
			{id:2, name:"sally", breeder:breeder, cost:20, info:"test2"},
			{id:3, name:"max", breeder:breeder, cost:30, info:"test3"}
		]
	};
	callback(null, results);
}
function searchBySpecie(specie, callback) {
	console.log("Search for bird from: " + specie);
	var results = {
		birds: [
			{id:1, name:"alex", breeder:"Jen", cost:10, info:"test"},
			{id:2, name:"sally", breeder:"Jen2", cost:20, info:"test2"},
			{id:3, name:"max", breeder:"Jen3", cost:30, info:"test3"}
		]
	};
	callback(null, results);
}

function getAllBirds(callback) {
	var results = {
		birds: [
			{id:1, name:"alex", breeder:"Jen", cost:10, info:"test"},
			{id:2, name:"sally", breeder:"Jen2", cost:20, info:"test2"},
			{id:3, name:"max", breeder:"Jen3", cost:30, info:"test3"}
		]
	};
	callback(null, results);
}

function getBirdById(id, callback) {
	var results = {id:id, name:"dove"};
	callback(null, results);
}

function insertNewBird(specie, name, breeder, cost, info, callback) {
	var results = {success:true,
					bird:{id:1, specie:specie, name:name, breeder:breeder, cost:cost, info:info}};
	callback(null, results);
}

function assignBreederToBird(specieID, breederId, callback) {
	var results = {success:true};
	callback(null, results);
}


module.exports = {
	searchByBreeder: searchByBreeder,
	searchBySpecie: searchBySpecie,
	getAllBirds: getAllBirds,
	getBirdById: getBirdById,
	insertNewBird: insertNewBird,
	assignBreederToBird: assignBreederToBird
};