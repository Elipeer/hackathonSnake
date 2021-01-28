

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



//current direction
let direction = "u"
//listning to what direction was pressed
document.addEventListener("keydown", keydirection)

let gameAlive = false;
let snakeLength = 2;

var middle = document.getElementById('821');
var currentId = middle.id;
console.log(currentId)

function looper(){
    console.log('looper', gridBoxSize)
    for (let j = 1; j <= gridBoxSize; j++) {
        
        //console.log(document.getElementById(j+1))
        document.getElementById(j).style.backgroundColor = "black";

    }
}

//figurs out what arrow key was pressed
function keydirection(e) {



    switch (e.keyCode) {

        case 37://direction left
            if (direction != "r") {
                direction = "l";
              
          
          
          let id = setInterval(function() {
            console.log(currentId)
            if (currentId <= 810) {
                
            
              clearInterval(id);
              console.log('game over')
            }
            else {
                           


               looper();

                for (var i = snakeLength; i > 0; i--) {
                    //document.getElementById(eval(currentId)+i).style.backgroundColor = "black";
                    currentId = Number(currentId)-i;
                    let currentDiv = document.getElementById(eval(currentId))  
                    currentDiv.style.backgroundColor = 'yellow'
              }
           
              
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

            let id = setInterval(function() {
            if (currentId == 801) {
              clearInterval(id);
              console.log('game over')
            }
            else {
              document.getElementById(eval(currentId)).style.backgroundColor = "black";
              console.log("hello" ,currentId)
              console.log(currentId+1);
              currentId = Number(currentId)+1;
              
              let currentDiv = document.getElementById(eval(currentId))  
              currentDiv.style.backgroundColor = 'yellow'
              
              
            }
          }, 100);
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

