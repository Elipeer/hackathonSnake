
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


//the snake
let dot = document.getElementById("dot")
//current direction
let direction = "u"
//listning to what direction was pressed
document.addEventListener("keydown", keydirection)

//figurs out what arrow key was pressed
function keydirection(e) {
    switch (e.keyCode) {

        case 37://direction left
            if (direction != "r") {
                direction = "l";
            }
            break;
        case 38://direction up
            if (direction != "d") {
                direction = "u";
            }
            break;
        case 39://direction right
            if (direction != "l") {
                direction = "r";
            }
            break;
        case 40://direction down
            if (direction != "u") {
                direction = "d";
            }
            break;
        default:
    }
}

