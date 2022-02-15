function debugCallback(response){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
};
function afcAjax(){
	
	//step1: use Fetch default method to retrieve data
	fetch('data/MegaCities.geojson')
		.then(function(response){
			return response.json();
		}) //step2 (above) convert the json data to usable data 
		.then(callback) //step3 send this newly usable data to the callback fxn
		

};	
//defining the callback fxn (below)
function callback(response){
	var myData = response;
	//pass the data pon the function side (Gareth, if you're reading this, pls go google "pass the kouchie by mighty diamonds"))
	nextFunction(myData);
	//console.log(JSON.stringify(response));
};	
function nextFunction(data){
	console.log(JSON.stringify(data)); //contains response held by myData in callbaq
	//this above console.log spits out the same info as the one in line 19, it just lacks the stringify part that makes it legible
	//now im gonna pass this to a final fxn which publishes it to the div
	finalFunction(data);
}
//this final fxn knows holds on to this variable containing the data and plops it into the div
function finalFunction(data4div){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(data4div))

	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(data4div))
};
document.addEventListener('DOMContentLoaded',afcAjax);