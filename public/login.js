/*
TODO FOR LOGIN STUFF:
	1. Write better validation 				2 hr
		a. require secure passwords
		b. do not allow duplicate usernames
		c. require better usernames
	2. HASH									2 hr
	3. Make it look nice				OPTIONAL (for this week)
*/

function validate() {
	var filled = true;
	// check that the fields are filled
	validateUserName();
	validatePassword();
	if(filled == false)
		$("#status").text("Please enter a username/password");
	else
		$("#status").text("");
}

function validateUserName() {
	// check that the field is filled
	var username = $("#username").val();
	
	// if it isn't let the user know
	if(username = "")
	{
		return false;
	}
	else
		return true;
}

function validatePassword() {
	// check that the field is filled
	var password = $("#password").val();
	
	// if it isn't let the user know
	if(password = "")
	{
		return false;
	}
	else
		return true;
}

function login() {
	var username = $("#username").val();
	var password = $("#password").val();

	var params = {
		username: username,
		password: password
	};

	$.post("/login", params, function(result) {
		if (result && result.success) {
			$("#status").text("Successfully logged in.");
			location.replace("birds.html");
		} else {
			$("#status").text("Error logging in.");
		}
	});
}

function newUser() {
	var username = $("#username").val();
	var password = $("#password").val();

	var params = {
		username: username,
		password: password
	};

	$.post("/register", params, function(result) {
		if (result && result.success) {
			$("#status").text("Successfully created.");
		} else {
			$("#status").text("Error creating user.");
		}
	});
}
