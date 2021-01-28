
var gridBoxSize = 1600;
var containerBox = document.getElementById('container');


var newRows;
var i = 1;
function createGame(){
for (i = 1; i <= gridBoxSize; i++) {
	newRows = document.createElement('div');
	newRows.setAttribute('class', 'gridRows');
    newRows.setAttribute('id', i);
    newRows.addEventListener('click', testfunc);
	containerBox.appendChild(newRows);
    console.log([i])
	}
   let middlex = document.getElementById('821');
   middlex.style.backgroundColor = 'yellow';

}

	createGame();

function testfunc(event){
console.log(event);
}


//the snake
let dot = document.getElementById("dot")
//current direction
let direction = "u"
//listning to what direction was pressed
document.addEventListener("keydown", keydirection)

var middle = document.getElementById('821');
var currentId = middle.id;
console.log(currentId)

//figurs out what arrow key was pressed
function keydirection(e) {
    switch (e.keyCode) {

        case 37://direction left
            if (direction != "r") {
                direction = "l";
              
          
          var position = middle;
          let id = setInterval(function() {
            if (position == 600) {
              clearInterval(id);
            }
            else {
              document.getElementById(eval(currentId)).style.backgroundColor = "black";
              currentId = eval(currentId-1)  
              let currentDiv = document.getElementById(eval(currentId))  
              currentDiv.style.backgroundColor = 'yellow'
              //
              
            }
          }, 100);
        
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

