
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
nextdot ()

//current direction
let direction = ""
//listning to what direction was pressed
document.addEventListener("keydown", keydirection)
let gameAlive = false;
var middle = document.getElementById('821');
middle.style.backgroundColor = 'yellow'
var currentId = middle.id;
var lastpart = [currentId, 1, 1];
//hello
function looper(){   
        document.getElementById(lastpart[lastpart.length-1]).style.backgroundColor = "black";      
    }


function nextdot (){
        var rnd = Math.floor((Math.random() * 1600 + 1))
        let newfood = document.getElementById(rnd)
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
              currentId = Number(currentId)-1;                   
              let currentDiv = document.getElementById(currentId)
              currentDiv.style.backgroundColor = 'yellow'
              lastpart.unshift(currentId)
              lastpart.pop(); 
              
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
              currentId = Number(currentId)-40;
              let currentDiv = document.getElementById(eval(currentId))  
              currentDiv.style.backgroundColor = 'yellow'
              lastpart.unshift(currentId)
              lastpart.pop();
              console.log(lastpart)
              
              
              
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
              looper()     
              currentId = Number(currentId)+1;
              let currentDiv = document.getElementById(eval(currentId))  
              currentDiv.style.backgroundColor = 'yellow'
              lastpart.unshift(currentId)
              lastpart.pop();
              console.log(lastpart)
              
              
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
      
            
              currentId = Number(currentId)+40;
              let currentDiv = document.getElementById(eval(currentId))  
              currentDiv.style.backgroundColor = 'yellow'
              lastpart.unshift(currentId)
              lastpart.pop();
              console.log(lastpart)
              
              
            }
         // }, 100);
            }
            break;
        default:
    }
}
