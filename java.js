var gridBoxSize = 40;
var containerBox = document.getElementById('container');


function createGame(){
for (var i = 0; i <= gridBoxSize; i++) {
	let newRows = document.createElement('div');
	newRows.setAttribute('class', 'gridRows');
	containerBox.appendChild(newRows);
	//nested for loop
    for (var x = 0; x <= gridBoxSize; x++) {
        let newColoums = document.createElement('div');
	    newColoums.setAttribute('class', 'gridColoums');
	    newRows.appendChild(newColoums);
    }
	}}
	createGame();