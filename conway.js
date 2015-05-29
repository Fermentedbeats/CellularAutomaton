/* RULES:
Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

// 1. Create 100 item array w/ 100 sub-arrays
// 2. Link each cell to a board cell
function createBoard() {

	var boardArray = new Array(10)
	for (var i = 0; i < boardArray.length; i++) {
		boardArray[i] = new Array(10);
	}

	function createBoardCell(counter) {
		var boardCell = document.createElement('div');
		boardCell.className = "boardCell";
		boardCell.setAttribute("className", counter);
		return boardCell;
	}

	for (var j = 0; j < boardArray.length; j++) {
		
		for (var k = 0; k < boardArray[j].length; k++) {
			
			document.getElementsByClassName("main")[0].appendChild(createBoardCell(k));	
		}
	}
}

createBoard();
// 3. Randomize each cell to fill with white or black (lean to 2/3 black) 
// 4. Start: Code in the rules to run 
// 5. Stop button