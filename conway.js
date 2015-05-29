/* RULES:
Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

// 1. Create 2500 cell table (50 x 50) with unique id on each cell

var boardArray = new Array(50)

var table = document.getElementById("main");

for (var i = 0; i < boardArray.length; i++) {
	var row = table.insertRow(-1);

	for (var j = 0; j < 50; j++) {
		var cell = row.insertCell(-1);
		var cellId = ((50 * i) + j);
		cell.setAttribute("id", "id" + cellId);
	}
}



// 3. Randomize each cell to fill with grey or black (lean to 2/3 black) 

function comeToLife() {

var tableCells = document.getElementsByTagName("td");
for (var k = 0; k < tableCells.length; k++) {
	var seedOfLife = Math.random();
	if (seedOfLife >= 0.8) {
		//document.getElementById(toString(k));
		var idString = "id" + k;
		console.log(idString);
		document.getElementById(idString).style.backgroundColor = "#707070";
		//.setAttribute('background-color', 'red');
		//document.getElementById(idString).innerHTML = 'red';
	}

}

}

comeToLife();


// 4. Start: Code in the rules to run 
// 5. Stop button