const loginModel = require("../models/loginModel.js");
function handleLogin(request, response) {
	var result = {success: false};
    const username = request.body.username;
    const password = request.body.password;
	
    loginModel.checkPass(username, password, function(error, data) {
		if (error){
            console.log("An error occurred in the DB Controller");
            console.log(error);
			result = {success: false};
		}
		else{
			request.session.user = request.body.username;
			result = {success: true};
		};
		response.json(result);
    });
}

function handleRegister(request, response) {
	var result = {success: false};
    const username = request.body.username;
    const password = request.body.password;
		
    loginModel.createUser(username, password, function(error, data) {
		if (error){
            console.log("An error occurred in the DB Controller");
            console.log(error);
			result = {success: false};
		}
		else{
			request.session.user = request.body.username;
			result = {success: true};
		};
        response.json(result);
    });
}

function handleLogout(request, response) {
	var result = {success: false};

	if (request.session.user) {
		request.session.destroy();
		result = {success: true};
	}
	response.json(result);
}

function verifyLogin(request, response, next) {
	if (request.session.user) {
		// They are logged in!
		// pass things along to the next function
		next();
	} else {
		// They are not logged in
		// Send back an unauthorized status
		var result = {success:false, message: "Access Denied"};
		response.status(401).json(result);
	}
}

module.exports = {
	handleLogin: handleLogin,
	handleRegister: handleRegister,
	handleLogout: handleLogout,
	verifyLogin: verifyLogin
};