function getAllBreeders(callback) {
	var results ={
		breeders: [
		{id:1, name:"parakeet"},
		{id:2, name:"macaw"},
		{id:3, name:"cockiteil"}
		]
	}
	callback(null, results);	
}

function getBreederById(id, callback) {
	var results = {id:id, name:"dove"};
	callback(null, results);
}

function insertNewBreeder(name, callback) {
	var results = {success:true};
	callback(null, results);
}

module.exports = {
	getAllBreeders: getAllBreeders,
	getBreederById: getBreederById,
	insertNewBreeder: insertNewBreeder
};