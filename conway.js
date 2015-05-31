/* RULES:
Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

// 1. Create 2500 cell table (50 x 50) with unique id on each cell

function createTable() {
// grab the hard-coded table
var table = document.getElementById("main");

// assign 50 rows
for (var i = 0; i < 50; i++) {
	var row = table.insertRow(-1);
	// assign 50 tds to each row
	for (var j = 0; j < 50; j++) {
		var cell = row.insertCell(-1);
		var cellId = ((50 * i) + j);
		//add a 0..2499 index id to each td 
		cell.setAttribute("id", "id" + cellId);
	}
}
return table
}

createTable();

// 3. Randomize each cell to fill with grey or black (lean toward > 1/3 organisms) 


// create array of all tds

function comeToLife() {
	var tableCells = document.getElementsByTagName("td");
	//console.log("FIRST" + tableCells);
	// iterate through array of all tds
	for (var k = 0; k < tableCells.length; k++) {
		// assign life to a small percentage of randomized tds
		var seedOfLife = Math.random();
		if (seedOfLife >= 0.6) {
			//console.log(tableCells[k])
			tableCells[k].style.backgroundColor = "#F3F315";
		}
	}
}
comeToLife();


// 4. Start: Code in the rules 
/* RULES:
Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/



function getNeighborCount(currentCell) {
var tableCells = document.getElementsByTagName("td");
	//console.log("SECOND" + tableCells);

	var neighborCount = 0;

	var theNeighborhood = [tableCells[currentCell], tableCells[currentCell+1], tableCells[currentCell+51],tableCells[currentCell+50], tableCells[currentCell+49], tableCells[currentCell-1], tableCells[currentCell-51], tableCells[currentCell-50], tableCells[currentCell-49]];

	// iterate thru 9 neighbors
	for (var counter = 0; counter < theNeighborhood.length; counter++) {

	   var cellToBeChecked = theNeighborhood[counter];
	   // ignore edge cases for now
       if (typeof cellToBeChecked === 'undefined') {
       	neighborCount += 0;
       }
       else if (cellToBeChecked.style.backgroundColor === "rgb(243, 243, 21)"){
       	neighborCount += 1;
       }
   }
   return neighborCount;
}	

/* RULES:
Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

function defineNextGen() {
    var tableCells = document.getElementsByTagName("td");
    	//console.log("THIRD" + tableCells);

	var nextGen = [];

	// iterate through each td
		for (var l = 0; l < tableCells.length; l++) {
				// get neighbor count
				var numOfNeighbors = getNeighborCount(l);
				// dump nextgen specs into new array
				if (numOfNeighbors === 3) {
					nextGen[l] = "rgb(243, 243, 21)";
				}
				else if (numOfNeighbors === 4) {
					if (tableCells[l].style.backgroundColor === "rgb(243, 243, 21)") {
						nextGen[l] = "rgb(243, 243, 21)";
					}
					else {
						nextGen[l] = "black";
					}
				}			
				else {
					nextGen[l] = "black";
				}
		}
	return nextGen
}
	
// global counter
var generations = 0;


function pushNextGen() {
	// queue up array of colors for next gen
	var newBoard = defineNextGen();
	// get array of current cells
	var tableCells = document.getElementsByTagName("td");
	// iterate through each cell
	for (var m = 0; m < tableCells.length; m++) {
		// assign the original cell a new color
		tableCells[m].style.backgroundColor = newBoard[m];
	}
	document.getElementById("countDracula").innerHTML = generations += 1;
}


// // 5. Start/Stop button



var interval;

function start(){
	interval = setInterval(function()
		{pushNextGen();
		}, 100);
} 
function stop(){
	clearInterval(interval);
}
function reset() {
	var main = document.getElementById("main");
	document.getElementById("tableHolder").removeChild(main);
	var newTable = document.createElement('table');
	newTable.id = "main";
	document.getElementById("tableHolder").appendChild(newTable);
	createTable();
	comeToLife();


}
