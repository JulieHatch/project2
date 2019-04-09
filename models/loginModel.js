const {Pool} = require("pg");
const dbConnectionString = process.env.DATABASE_URL;
console.log(`DB connection: ${dbConnectionString}`);
const myPool = Pool({connectionString: dbConnectionString});
function checkPass(username, password, callback) {
	var sql = "SELECT username, password FROM Breeder WHERE username = $1 AND password =$2";
	const params = [username, password];
    myPool.query(sql, params, function(error, result) {
        if (error || result.rows=="") {
			if (result.rows=="")
				error = "Invalid username/pass.";
            console.log("An error occurred in the DB");
			console.log(error);
            callback(error, null);
        } else {
			console.log("No error occurred in the DB");
            callback(null, result.rows);
        }
    });
}
function createUser(username, password, callback) {
    const sql = "INSERT INTO Breeder (username, password) VALUES($1, $2) RETURNING  breeder_id";
    const params = [username, password];
    myPool.query(sql, params, function(error, result) {
        if (error) {
            console.log("An error occurred in the DB");
            console.log(error);
            callback(error, null);
        } else {
            callback(null, result.rows);
        }
    });
}
module.exports = {
	checkPass: checkPass,
	createUser: createUser
};