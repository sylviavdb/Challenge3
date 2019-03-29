$.getJSON(
	"https://api.adviceslip.com/advice",function(data) { 
	// console.log(data);

	var advice = data.slip.advice;
	// console.log(data.slip.advice);

	$(".advice").append(advice);
}
);