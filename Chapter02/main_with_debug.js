//initialize function 
function initialize(){
	cities();
	console.log('is this initialize fxn running?');
};
//need a function to create the cityPop array then create a table populated by it
function cities(){
//so right here is the array which has all the info we want for the table
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];
	//below here is gonna be the table creation 
	var table = document.createElement("table");
	//now we're gonna create a header row and append it to our table
	var headerRow = document.createElement("tr");
	table.appendChild(headerRow);
	//creates headers for "City" and "Population"
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>");
	//going to try out a loop here which should populate the body of the table w the array's content
	cityPop.forEach(function(cityObject){
		var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
		table.insertAdjacentHTML('beforeend',rowHtml);
	});
	//now let's append that table to the div, shall we?
	document.querySelector('#mydiv').appendChild(table);
	//now let's call the fxns from below to add columns and interactivity to this here table!
	addColumns(cityPop);
	addEvents();
};
function addColumns(cityPop){
	console.log('is this add columns fxn runnin?');
	//selects all cells and creates rows as a new var from this selection
	var rows = document.querySelectorAll('tr');
	document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
			//adds "City Size" as an adjacent header
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
			//this else block assigns a size to a city once the if block is through assigning them headers
    		var citySize;

    			if (cityPop[i-1].population < 100000){
    				citySize = 'Small';

    			} else if (cityPop[i-1].population < 500000){
    				citySize = 'Medium';

    			} else {
    				citySize = 'Large';
    			};

			//creates the "City Size" header
			row.insertAdjacentHTML = '<td' + citySize + '</td>';
			//time to append the city size designations to the table
			var newRow = document.createElement('td')
				newRow.innerHTML = citySize
				row.appendChild(newRow);
    	};
    });
};
function addEvents(){

	//before I can do anything with the table, we need to select it (below)
	table = document.querySelector('table');
	//now that it's selected, we can initiate the mouseover function
	document.querySelector("table").addEventListener("mouseover", function(){
		//below, a var called "color" invokes css to bring up the rgb palatte
		var color = "rgb(";
		//loop below generates a random color
		for (var i=0; i<3; i++){
			console.log('is this loop running?');//self explanatory console.log statement
			//below, a var called "random" is created to generate a random number each time it's called
			var random = Math.round(Math.random() * 255);
			//this statement below makes it so that each time color is called, it picks whatever color equates to the randomly generated number
			color += random;
			//this if statement keeps the loop running as long as i is less than 2
			if (i<2){
				color += ",";
			//the else closes the loop
			} else {
				color += ")";
		
			};
		};
		//this statement sets the value of the table's style to the color var
		table.style.color = color;
	});
	//this little function below causes a click to prompt a message
	function clickme(){

		alert('Hey, you clicked me!');
	};
	//this statement prompts the clickme fxn to run every time a click occurs
	document.querySelector("table").addEventListener("click", clickme)
};
//calling the initialize function for once everything in the DOM loads
document.addEventListener('DOMContentLoaded',initialize)