/* RULES:
Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

// 1. Create 2500 cell table (50 x 50) with unique id on each cell


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

// 3. Randomize each cell to fill with grey or black (lean toward > 1/3 organisms) 


// create array of all tds
var tableCells = document.getElementsByTagName("td");

function comeToLife() {
	// iterate through array of all tds
	for (var k = 0; k < tableCells.length; k++) {
		// assign life to a small percentage of randomized tds
		var seedOfLife = Math.random();
		if (seedOfLife >= 0.8) {
			//console.log(tableCells[k])
			tableCells[k].style.backgroundColor = "#707070";
		}
	}
}

// 4. Start: Code in the rules 
/* RULES:
Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/
function nextGen() {
	var neighborCount = 0;

	function getNeighborCount() {
		// iterate through each td
		for (var l = 0; l < tableCells.length; l++) {

			// define neighborhood (surrounding 8 cells)
			var theNeighborhood = [tableCells[l], tableCells[l-1], tableCells[l+1], tableCells[l-150], tableCells[l+150], tableCells[l-149], tableCells[l+149], tableCells[l-151], tableCells[l+151]];

			// increment count as life is found in hood
			for  (var m = 0; m < theNeighborhood.length; m++) {
				var home = theNeighborhood[m];
				console.log(home);
				if (home.style.backgroundColor == "#707070") {
					neighborCount += 1;
					console.log("neighbors equals " + neighborCount);
			}
			// if hood is less than 3 all organism die
			// if (neighborCount < 3) {
			// 	for  (var m = 0; m < theNeighborhood.length; m++) {
			// 	home.style.backgroundColor == "black";
			}
		}
	}
	debugger;
	getNeighborCount();
}

//nextGen();

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
comeToLife();
