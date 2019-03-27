const {Pool} = require("pg");
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString: db_url});

function searchByBreeder(breeder, callback) {
	console.log("Search for bird from: " + breeder);
	var sql = "SELECT bird_id, name, info, cost, birth FROM Bird";
	
	pool.query(sql, function(err, db_results){
		if(err){
			throw err;
		}
		else {
			console.log("Back from the database with: ");
			console.log(db_results);
		}
		var results = {
			success:true,
			birds:db_results.rows
		};
		callback(null, results);	
	});
}
function searchBySpecie(specie, callback) {
	console.log("Search for bird from: " + specie);
	var sql = "SELECT bird_id, name, info, cost, birth FROM Bird WHERE name=$1::text";
	var params = [specie];
	pool.query(sql, params, function(err, db_results){
		if(err){
			throw err;
		}
		else {
			console.log("Back from the database with: ");
			console.log(db_results);
		}
		var results = {
			success:true,
			birds:db_results.rows
		};
		callback(null, results);	
	});
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