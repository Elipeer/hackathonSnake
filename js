
//amount of divs/cells in game
var gridBoxSize = 1600;
//where game is played
var containerBox = document.getElementById('container');
//grid counter
var i = 1;


function createGame(){
    for (i = 1; i <= gridBoxSize; i++) {
        let newCells = document.createElement('div');
        newCells.setAttribute('class', 'gridRows');
        newCells.setAttribute('id', i);
        containerBox.appendChild(newCells);
        //console.log([i])
    }

}

createGame();


//current direction
let direction = ""
//listning to what direction was pressed
document.addEventListener("keydown", keydirection)
let gameAlive = false;
let snakeLength = 3;
var middle = document.getElementById('821');
middle.style.backgroundColor = 'yellow'
var currentId = middle.id;
console.log(currentId)

function looper(){
    for (let j = 1; j <= gridBoxSize; j++) {
        //console.log(document.getElementById(j+1))
        document.getElementById(j).style.backgroundColor = "black";

        }
    }


function nextdot (){
        let rnd = Math.floor((Math.random() * 1600 + 1))
        let newfood = document.getElementById(810)
        newfood.style.backgroundColor = "white"
        console.log(newfood);
        }

        //figurs out what arrow key was pressed
function keydirection(e) {

    

    switch (e.keyCode) {

        case 37://direction left
            if (direction != "r") {
                direction = "l";
              
          
          
          //let id = setInterval(function() {
            console.log(currentId)
            if (currentId == 1600) {
              clearInterval(id);
              console.log('game over')
            }
            else {
                           
               looper();
               nextdot();
               
            for (var d = snakeLength; d > 0; d--) {
                    currentId = Number(currentId)-1;
                    
                    console.log(currentId);
                    let currentDiv = document.getElementById(currentId)
                    currentDiv.style.backgroundColor = 'yellow'
             }
              
            }
         // }, 100);
        
            }
            break;
        case 38://direction up
            if (direction != "d") {
                direction = "u";
          // let id = setInterval(function() {
            if (currentId == 1600) {
              clearInterval(id);
              console.log('game over')
            }
            else {
               looper();
               nextdot();
               for (var i = snakeLength; i > 0; i--) {
                    currentId = Number(currentId)-40;
                    let currentDiv = document.getElementById(eval(currentId))  
                    currentDiv.style.backgroundColor = 'yellow'
              }
              
              
            }
         // }, 100);

            }
            break;


        case 39://direction right
            if (direction != "l") {
                direction = "r";

           // let id = setInterval(function() {
            if (currentId == 1600) {
              clearInterval(id);
              console.log('game over')
            }
            else {
               looper();
               nextdot();
               for (var i = snakeLength; i > 0; i--) {
                    currentId = Number(currentId)+1;
                    let currentDiv = document.getElementById(eval(currentId))  
                    currentDiv.style.backgroundColor = 'yellow'
              }
              
              
            }
         // }, 100);
            }
            break;




        case 40://direction down
            if (direction != "u") {
                direction = "d";
                          // let id = setInterval(function() {
            if (currentId == 1600) {
              clearInterval(id);
              console.log('game over')
            }
            else {
               looper();
               nextdot();
               for (var i = snakeLength; i > 0; i--) {
                    currentId = Number(currentId)+40;
                    let currentDiv = document.getElementById(eval(currentId))  
                    currentDiv.style.backgroundColor = 'yellow'
              }
              
              
            }
         // }, 100);
            }
            break;
        default:
    }
}