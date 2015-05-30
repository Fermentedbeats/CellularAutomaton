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
	// iterate through array of all tds
	for (var k = 0; k < tableCells.length; k++) {
		// assign life to a small percentage of randomized tds
		var seedOfLife = Math.random();
		if (seedOfLife >= 0.6) {
			//console.log(tableCells[k])
			tableCells[k].style.backgroundColor = "#707070";
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
	var neighborCount = 0;

	var theNeighborhood = [tableCells[currentCell], tableCells[currentCell+1], tableCells[currentCell+51],tableCells[currentCell+50], tableCells[currentCell+49], tableCells[currentCell-1], tableCells[currentCell-51], tableCells[currentCell-50], tableCells[currentCell-49]];

	// iterate thru 9 neighbors
	for (var counter = 0; counter < theNeighborhood.length; counter++) {

	   var cellToBeChecked = theNeighborhood[counter];
	   // ignore edge cases for now
       if (typeof cellToBeChecked === 'undefined') {
       	neighborCount += 0;
       }

       else if (cellToBeChecked.style.backgroundColor === "rgb(112, 112, 112)"){
       	neighborCount += 1;
       }
   }
   return neighborCount;
}	


function nextGen() {
    var tableCells = document.getElementsByTagName("td");
	var nextGen = [];

	// iterate through each td
		for (var l = 0; l < tableCells.length; l++) {
				var numOfNeighbors = getNeighborCount(l);
				if (numOfNeighbors < 2) {
					nextGen[l] = "black";
				}
				else if (numOfNeighbors < 4) {
					nextGen[l] = "rgb(112, 112, 112)";	
				}			
				else {
					nextGen[l] = "black";
				}
			}

			console.log(nextGen);
		

}

nextGen();


			// var currentCell = tableCells[l];

			// // define neighborhood (surrounding 8 cells)

			// // increment count as life is found in hood

			//  }
			//  	var neighbor = theNeighborhood[m];
			// 	}
			// 		neighborCount += 1;
			// 		console.log("neighbors equals " + neighborCount);
			// }
			// if hood is less than 3 all organism die
			// if (neighborCount < 3) {
			// 	for  (var m = 0; m < theNeighborhood.length; m++) {
			// 	home.style.backgroundColor == "black";
			

//if (neighborCount <= 3		



// // 5. Start/Stop button



// var interval;

// function start(){
// 	interval = setInterval(function()
// 		{nextGen();
// 		}, 100);
// } 

// function stop(){
// 	clearInterval(interval);
// }
