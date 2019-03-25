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
			$('#ulBirds').append("<li>" + bird.name + " " + bird.breeder + "</li>");
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
	});
	
}