//amount of divs/cells in game
var gridBoxSize = 1600;
//where game is played
var containerBox = document.getElementById('container');

createGame();

//current direction
let direction = ""
//listning to what direction was pressed
document.addEventListener("keydown", keydirection)
//fisrt dot of snake
var middle = document.getElementById('821');
middle.style.backgroundColor = 'yellow'
//saves ransom noumber spot
var rnd = 1;
var currentId = middle.id;
//the snake itself as an array
var lastpart = [currentId, 1, 1, 1];
let currentDiv = document.getElementById(currentId)

nextdot();
//creates the grid of the game
function createGame() {
  for (let i = 1; i <= gridBoxSize; i++) {
    let newCells = document.createElement('div');
    newCells.setAttribute('class', 'gridRows');
    newCells.setAttribute('id', i);
    containerBox.appendChild(newCells);
    //console.log([i])
  }
}
//adds one spot to the snake
function addLength() {
  lastpart.push(1);
  score();
}
function score() {
  let score = lastpart.length - 4;
  let scoreCard = document.getElementById('scoreId');
  scoreCard.innerHTML = score;
  console.log(score)
}
//makes the last spot of the snake bck to black
function looper() {
  document.getElementById(lastpart[lastpart.length - 1]).style.backgroundColor = "black";
}
//if food was eaten creates a new dot and makes the snake bigger
function foodCollector() {
  if (rnd == currentId) {
    nextdot()
    addLength()
  }
}
//creates randomely a tod on the screen
function nextdot() {
  rnd = Math.floor((Math.random() * 1600 + 1))
  var newfood = document.getElementById(rnd)
  newfood.style.backgroundColor = "white"
}
//if the snake hits himself
function hitMyFace() {
  let las = lastpart.slice(1, lastpart.length);
  if (las.includes(currentId)) {
    dead()
  }
}
//figurs out what arrow key was pressed
function keydirection(e) {
  switch (e.keyCode) {

    case 37://direction left
      if (direction != "r") {
        direction = "l";
        let leftD = setInterval(function () {
          if ((currentId - 1) % 40 == 0) {
            clearInterval(leftD)
            dead()
          }
          else {
            if (direction != "l") {
              clearInterval(leftD);
            }
            codecaller()
            currentId = Number(currentId) - 1;
            workcode()                      
          }
        }, 100);
      }
      break;

    case 38://direction up
      if (direction != "d") {
        direction = "u";
        let upD = setInterval(function () {
          if (currentId > 0 && currentId < 40) {
            clearInterval(upD)
            dead()
          }
          else {
            if (direction != "u") {
              clearInterval(upD);
            }
            codecaller()
            currentId = Number(currentId) - 40;
            workcode()           
          }
        }, 100);
      }
      break;

    case 39://direction right
      if (direction != "l") {
        direction = "r";
        let rightD = setInterval(function () {
          if (currentId % 40 == 0) {
            clearInterval(rightD)
            dead()
          }
          else {
            if (direction != "r") {
              clearInterval(rightD);
            }
            codecaller()
            currentId = Number(currentId) + 1;
            workcode()             
          }
        }, 100);
      }
      break;

    case 40://direction down
      if (direction != "u") {
        direction = "d";
        let downD = setInterval(function () {
          if (currentId > 1560 && currentId < 1601) {
            clearInterval(downD)
            dead()
          }
          else {
            if (direction != "d") {
              clearInterval(downD);
            }
            codecaller()
            currentId = Number(currentId) + 40;
            workcode()            
          }
        }, 100);
      }
      break;
    default:
  }
}
function workcode(){
  let currentDiv = document.getElementById(currentId)
  currentDiv.style.backgroundColor = 'yellow'
  lastpart.unshift(currentId)
  lastpart.pop();
}
function codecaller(){
  foodCollector();          
  hitMyFace();
  looper();           
}
function dead(){
  let loose = document.getElementById("lost")
  loose.style.display = "block"
}
