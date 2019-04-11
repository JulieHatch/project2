/**********************************************************
 * Sends request to log a user out
**********************************************************/
function logout() {
	$.post("/logout", function(result) {
		if (result && result.success) {
			location.replace("login.html");
			$("#status").text("Successfully logged out.");
		} else {
			$("#status").text("Error logging out.");
		}
	});
}

/**********************************************************
 * Adjusts the page for the user to see the search view
**********************************************************/
function searchView() {
	var search = document.getElementById("search");
	var breedersView = document.getElementById("breedersView");
	
    search.style.display = "block";
    breedersView.style.display = "none";
}

/**********************************************************
 * Adjusts the page for the user to see the search view
**********************************************************/
function breederView() {
	var search = document.getElementById("search");
	var breedersView = document.getElementById("breedersView");
	
    search.style.display = "none";
    breedersView.style.display = "block";
	getBirds();
}

/**********************************************************
 * Adjusts the page for the user to be able to add a bird
**********************************************************/
function addBirdView() {
    var addBtn = document.getElementById("addBtn");
    var addBird = document.getElementById("addBird");
	addBird.style.display = "block";
	addBtn.style.display = "none";
}

/**********************************************************
 * Gathers data and requests that the users bird be
 * added to the database.
**********************************************************/
function addBird() {
	var addBtn = document.getElementById("addBtn");
    var addBird = document.getElementById("addBird");
	var search = document.getElementById("search");
	var breedersView = document.getElementById("breedersView");
	var name = $('#name').val();
    var info = $('#info').val();
    var birth = $('#birth').val();
    var cost = $('#cost').val();
    var specie = $('#specie').val();
	
	$.post("/addBird",{name:name, birth:birth, info:info, cost:cost, specie:specie}, function(data){
		console.log("Back from the server with:");
		console.log(data);
		getBirds();
	});
	addBtn.style.display = "block";
	addBird.style.display = "none";
    search.style.display = "none";
    breedersView.style.display = "block";
}

/**********************************************************
 * Requests all birds that are owned by a specific breeder
 * and displays them for the user.
**********************************************************/
function getBirds(){
	console.log("gathering birds");
	var display='';
	
	$.get("/birds", function(data){
		console.log("Back from the server with: ");
		console.log(data);
		for(var i = 0; i < data.birds.length; i++){
			var bird = data.birds[i];
			console.log(bird);
			display = display +"<div class='col-sm-4'><div class='well'><b><h3>" 
			+bird.name+ "</b></h3><h4><br><b>Hatch Date:</b><br> "+bird.birth
			+"<br><br><b>Cost:</b><br> $"+bird.cost+ ".00<br><br><b>Info:</b><br> "+bird.info
			+"</h4><br><button class='btn btn-danger' onclick='deleteBird("+bird.bird_id+ ")'>"+
			"Delete </button>"+"</div></div>";
		}
		document.getElementById("ulBird").innerHTML = display;
	});
}

/**********************************************************
 * Requests that a bird be deleted from a database
**********************************************************/
function deleteBird(bird_id){
	console.log("Deleting bird by ID:"+bird_id);
	$.get("/deleteBird",{bird_id:bird_id}, function(data){
		console.log("Back from the server after deletion with:");
		console.log(data);
		getBirds();
	});
}

/**********************************************************
 * Requests for and displays results of a list of birds of
 * the selected species
**********************************************************/
function searchBySpecie(){
	console.log("searching by specie");
	var specie = $('#species').val();
	var display='';
	
	console.log("specie: "+specie);
	$.get("/searchBySpecie",{specie:specie}, function(data){
		console.log("Back from the server with:");
		console.log(data);
		for(var i = 0; i < data.birds.length; i++){
			var bird = data.birds[i];
			console.log(bird);
			display = display +"<div class='col-sm-4'><div class='well'><b>" 
			+bird.name+ "</b><br>Hatch Date: "+bird.birth+ "<br>Cost: $"
			+bird.cost+ ".00<br>Info: "+bird.info+"<br>"+"</div></div>";
		}
		document.getElementById("ulBirds").innerHTML = display;
	});
}

/**********************************************************
 * Requests for and displays results of a list of birds of
 * the selected breeder
**********************************************************/
function searchByBreeder(){	
	console.log("searching by breeder");
	var breeder = $('#breeders').val();
	var display='';
	
	console.log("breeder: "+breeder);
	$.get("/searchByBreeder",{breeder:breeder}, function(data){
		console.log("Back from the server with: ");
		console.log(data);
		for(var i = 0; i < data.birds.length; i++){
			var bird = data.birds[i];
			console.log(bird);
			display = display +"<div class='col-sm-4'><div class='well'><b>" 
			+bird.name+ "</b><br>Hatch Date: "+bird.birth+ "<br>Cost: $"
			+bird.cost+ ".00<br>Info: "+bird.info+"<br>"+"</div></div>";
		}
		document.getElementById("ulBirds").innerHTML = display;
	});
}