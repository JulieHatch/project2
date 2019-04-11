const {Pool} = require("pg");
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString: db_url});

function searchByBreeder(breeder, callback) {
	console.log("Search for bird from: " + breeder);
	var sql = "SELECT bird_id, name, info, cost, birth FROM Bird WHERE breeder_id =(SELECT breeder_id FROM Breeder WHERE username = $1)";
	var params = [breeder];
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

function searchBySpecie(specie, callback) {
	console.log("Search for bird from: " + specie);
	var sql = "SELECT bird_id, name, info, cost, birth FROM Bird WHERE specie_id=(SELECT specie_id FROM Specie WHERE name = $1)";
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

function insertNewBird(name, info, cost, birth, specie, breeder, callback) {
	console.log("Adding bird: " + name);
	var sql = "INSERT INTO Bird(name, info, cost, birth, specie_id, breeder_id) VALUES($1, $2, $3, $4, (SELECT specie_id from Specie WHERE name=$5), (SELECT breeder_id from Breeder WHERE username=$6))";
	var params = [name, info, cost, birth, specie, breeder];
	pool.query(sql, params, function(err, db_results){
		if(err){
			throw err;
		}
		else {
			console.log("Added Bird: ");
		}
		var results = {
			success:true
		};
		callback(null, results);	
	});
}

function deleteBird(bird_id, callback) {
	console.log("Deleting bird: " + bird_id);
	var sql = "DELETE FROM Bird WHERE bird_id=$1";
	var params = [bird_id];
	pool.query(sql, params, function(err, db_results){
		if(err){
			throw err;
		}
		else {
			console.log("Deleted Bird: ");
		}
		var results = {
			success:true
		};
		callback(null, results);	
	});
}

module.exports = {
	searchByBreeder: searchByBreeder,
	searchBySpecie: searchBySpecie,
	insertNewBird: insertNewBird,
	deleteBird: deleteBird
};