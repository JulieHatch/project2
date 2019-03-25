const breederModel = require("../models/breederModel.js");
function getBreederList(req, res){
	console.log("Getting all breeders...");
	breederModel.getAllBreeders(function(error, results) {
		res.json(results);
	});
}

function getBreeder(req, res){
	var id = req.query.id;
	console.log("Getting one breeders by id: " + id);
	breederModel.getBreederById(id, function(error, results){
		res.json(results);		
	});

}

function postBreeder(req, res) {
	var name = req.body.name;
	console.log("Creating a new breeder with name: " + name);
	breederModel.insertNewBreeder(name, function(error, results) {
		res.json(results);
	});
	
}
module.exports = {
	getBreederList: getBreederList,
	getBreeder: getBreeder,
	postBreeder: postBreeder
	
};