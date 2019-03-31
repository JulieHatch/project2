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
		c. Breeder page			         			1.0 hr
		d. Breeder add bird(popup?) 				1.5 hr
		e. Breeder delete bird(popup?)				1.0 hr
		f. Breeder edit bird(popup?)				1.5 hr
		g. Breeder edit breeder info(popup?)		1.0 hr
	----------------------------------------------------
	4. Make it look nice
		a. Learn how to implement boot strap 		2.0 hr
		b. Pick color scheme						0.5 hr
		c. Give the page a menu						0.3 hr
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

function searchBySpecie(){
	console.log("searching by specie");
	var specie = $('#specie').val();
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
	var breeder = $('#breeder').val();
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