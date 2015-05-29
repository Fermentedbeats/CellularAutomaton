/* RULES:
Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

// 1. Create 100 item array w/ 100 sub-arrays
// 2. Link each cell to a board cell
//function createBoardArray() {

	var boardArray = new Array(10)
	for (var i = 0; i < boardArray.length; i++) {
		boardArray[i] = new Array(10);
	}

	var table = document.getElementById("main");




	// function createTableRow(counter) {

	// 	var tableRow = document.createElement('tr');
	// 	tableRow.className = "tableRow";
	// 	tableRow.setAttribute("tableRow", counter);
	// 	return tableRow;
	// }

	// function createTableCell(counter) {
	// 	var tableCell = document.createElement('td');
	// 	tableCell.className = "tableCell";
	// 	tableCell.setAttribute("className", counter);
	// 	return tableCell;
	// }

	for (var j = 0; j < boardArray.length; j++) {
		 var row = table.insertRow(-1);

		 for (var k = 0; k < 10; k++) {
		   var cell = row.insertCell(-1);
		}
	}
			
	// for (var k = 0; k < boardArray[j].length; k++) {

	// 	}
//}

//createBoard();
// 3. Randomize each cell to fill with white or black (lean to 2/3 black) 
// 4. Start: Code in the rules to run 
// 5. Stop button