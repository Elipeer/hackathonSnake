//amount of divs/cells in game
var gridBoxSize = 1600;
//where game is played
var containerBox = document.getElementById('container');
//grid counter
var i = 1;


function createGame() {
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
var middle = document.getElementById('821');
middle.style.backgroundColor = 'yellow'
var rnd = 1;
var currentId = middle.id;
//console.log(currentId)
nextdot();
let currentDiv = document.getElementById(currentId)


var lastpart = [currentId, 1, 1];



function addLength() {

  lastpart.push(1);
  score();
}
addLength();
//console.log(lastpart)

function score() {
  let score = lastpart.length - 4;
  console.log(score)
}
score();

function looper() {

  document.getElementById(lastpart[lastpart.length - 1]).style.backgroundColor = "black";
}
function foodCollector() {
  if (rnd == currentId) {
    nextdot()
    addLength()
    // console.log('hello')
  }

}

function nextdot() {
  rnd = Math.floor((Math.random() * 1600 + 1))
  var newfood = document.getElementById(rnd)
  newfood.style.backgroundColor = "white"

}



//figurs out what arrow key was pressed
function keydirection(e) {
  let upD;
  let downD;
  let rightD;
  let leftD;

  switch (e.keyCode) {

    case 37://direction left
      if (direction != "r") {
        direction = "l";



        leftD = setInterval(function () {
          // console.log(currentId)
          if (currentId == 1600) {
            clearInterval(id);
            // console.log('game over')
          }
          else {
            if (direction != "l") {
              clearInterval(leftD);
            }

            looper();
            foodCollector();


            currentId = Number(currentId) - 1;
            let currentDiv = document.getElementById(currentId)
            currentDiv.style.backgroundColor = 'yellow'
            lastpart.unshift(currentId)
            lastpart.pop();
            //console.log(lastpart)


          }
        }, 100);

      }
      break;
    case 38://direction up
      if (direction != "d") {
        direction = "u";
        upD = setInterval(function () {
          if (currentId == 1600) {
            clearInterval(id);
            //console.log('game over')
          }
          else {
            if (direction != "u") {
              clearInterval(upD);
            }
            looper();
            foodCollector();



            currentId = Number(currentId) - 40;
            let currentDiv = document.getElementById(eval(currentId))
            currentDiv.style.backgroundColor = 'yellow'
            lastpart.unshift(currentId)
            lastpart.pop();
            // console.log(lastpart)




          }
        }, 100);

      }
      break;


    case 39://direction right
      if (direction != "l") {
        direction = "r";

        rightD = setInterval(function () {
          if (currentId == 1 < 40) {
            clearInterval(id);
            console.log('game over')
          }
          else {
            if (direction != "r") {
              clearInterval(rightD);
            }
            looper();
            foodCollector();

            currentId = Number(currentId) + 1;
            let currentDiv = document.getElementById(eval(currentId))
            currentDiv.style.backgroundColor = 'yellow'
            lastpart.unshift(currentId)
            lastpart.pop();
            // console.log(lastpart)


          }
        }, 100);
      }
      break;




    case 40://direction down

      if (direction != "u") {
        direction = "d";


        downD = setInterval(function () {

          if (currentId == 0) {
            clearInterval(id);
            console.log('game over')
          }
          else {
            if (direction != "d") {
              clearInterval(downD);
            }
            looper();
            foodCollector();

            currentId = Number(currentId) + 40;
            let currentDiv = document.getElementById(eval(currentId))
            currentDiv.style.backgroundColor = 'yellow'
            lastpart.unshift(currentId)
            lastpart.pop();
            // console.log(lastpart)


          }
        }, 100);
      }

      break;
    default:
  }
}
function gameover(){
  if ()
}

