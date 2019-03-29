


$.getJSON(
	"https://api.punkapi.com/v2/beers/random ",function(data) { 
	// console.log(data);

	var name = data[0].name;
	var description = data[0].description;
	var pairing = data[0].food_pairing[1];
	var maker = data[0].contributed_by;
	

	$(".name").append(name);
	$(".description").append(description);
	$(".combine").append(pairing);
	$(".maker").append(maker);


}

);
