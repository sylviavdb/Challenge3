
$.getJSON(
	"https://www.boredapi.com/api/activity?participants=2",function(data) { 
	// console.log(data);

	var activity = data.activity;
	// console.log(activity);	

	$(".activity").append(activity);


}

);
