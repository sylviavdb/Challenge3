http://api.apixu.com/v1/current.json?key=f55adfe3e5614048955153817191803&q=Scheveningen 

$.getJSON(
	"https://api.openweathermap.org/data/2.5/weather?q=Den+Haag&units=metric&appid=096414b7c55882c53096c6c262c11247",function(data) { 
	// console.log(data);

	var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var temp = Math.floor(data.main.temp);
	var weather = data.weather[0].main;


	$(".icon").attr("src", icon);
	$(".weather").append(weather);
	$(".temp").append(temp);

	

}

);

