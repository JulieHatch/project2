/**********************************************************
				TODO FOR PROJECT #2:
-----------------------------------------------------------

	1. Login Stuff (listed in login.js)				4.0 hr
	----------------------------------------------------
	2. Create logout button that 					
	   only appears when logged in					0.5 hr
	----------------------------------------------------   
	3. Create different pages							
		a. Figure how to search better     			2.0 hr
		b. Find a breeder							1.0 hr
	----------------------------------------------------
	4. Make it look nice
		d. Make login look nice						0.7 hr
		e. Make pages in (3) look nice				3.0 hr
		f. Find pictures							0.5 hr
-----------------------------------------------------------	

	TOTAL TIME ESTIMATION(MAX)						21 hr
	
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

function homeView() {
  var home = document.getElementById("home");
  var search = document.getElementById("search");
  var breedersView = document.getElementById("breedersView");

    home.style.display = "block";
    search.style.display = "none";
    breedersView.style.display = "none";

}

function searchView() {
  var home = document.getElementById("home");
  var search = document.getElementById("search");
  var breedersView = document.getElementById("breedersView");

    home.style.display = "none";
    search.style.display = "block";
    breedersView.style.display = "none";
}

function breederView() {
	var home = document.getElementById("home");
	var search = document.getElementById("search");
	var breedersView = document.getElementById("breedersView");

    home.style.display = "none";
    search.style.display = "none";
    breedersView.style.display = "block";
	getBirds();

}
function addBirdView() {
	
    var addBird = document.getElementById("addBird");
	addBird.style.display = "block";
}
function addBird() {

    var addBird = document.getElementById("addBird");
	var home = document.getElementById("home");
	var search = document.getElementById("search");
	var breedersView = document.getElementById("breedersView");
	var name = $('#name').val();
    var info = $('#info').val();
    var birth = $('#birth').val();
    var cost = $('#cost').val();
    var specie = $('#specie').val();
    var breeder = $('#breeder').val();
	$.post("/addBird",{name:name, birth:birth, info:info, cost:cost, specie:specie, breeder:breeder}, function(data){
		console.log("Back from the server with:");
		console.log(data);
		getBirds();
	});
	addBird.style.display = "none";
	home.style.display = "none";
    search.style.display = "none";
    breedersView.style.display = "block";
}

function getBirds(){
	console.log("gathering birds");
	var display='';
	$.get("/birds", function(data){
		console.log("Back from the server with: ");
		console.log(data);
		
		for(var i = 0; i < data.birds.length; i++){
			var bird = data.birds[i];
			console.log(bird);
			display = display +"<div class='col-sm-4'><div class='well'><b>" 
			+bird.name+ "</b><br>Hatch Date:"+bird.birth+ "<br>Cost: $"+bird.cost+ ".00<br>Info:"+bird.info
			+"<br><button class='btn btn-danger' onclick='deleteBird("+bird.bird_id+ ")'>"+
			"Delete </button>"
			+"</div></div>";
		}
		document.getElementById("ulBird").innerHTML = display;
	});
	
}

function deleteBird(bird_id){
	console.log("Deleting bird by ID:"+bird_id);
	$.get("/deleteBird",{bird_id:bird_id}, function(data){
		console.log("Back from the server after deletion with:");
		console.log(data);
		getBirds();
	});
	
}
function editBirdView(){
	var editBird = document.getElementById("editBird");
	edit.style.display = "block";
}
function searchBySpecie(){
	console.log("searching by specie");
	var specie = $('#species').val();
	console.log("specie: "+specie);
	$.get("/searchBySpecie",{specie:specie}, function(data){
		console.log("Back from the server with:");
		console.log(data);
		
		for(var i = 0; i < data.birds.length; i++){
			var bird = data.birds[i];
			console.log(bird);
			$('#ulBirds').append("<li>" + bird.name + " Info: " + bird.info + "</li>");
		}
	});
}

function searchByBreeder(){	
console.log("searching by breeder");
	var breeder = $('#breeders').val();
	console.log("breeder: "+breeder);
	$.get("/searchByBreeder",{breeder:breeder}, function(data){
		console.log("Back from the server with: ");
		console.log(data);
		for(var i = 0; i < data.birds.length; i++){
			var bird = data.birds[i];
			console.log(bird);
			$('#ulBirds').append("<li>Name: " + bird.name + " Info: " + bird.info + "</li>");
		}
	});
	
}