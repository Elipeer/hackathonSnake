//amount of divs/cells in game
var gridBoxSize = 1600;
//where game is played
var containerBox = document.getElementById('container');

//start button activates game
var startbutton = document.getElementById("button1")
startbutton.addEventListener("click", startgame)
//current direction
let direction = ""
//saves ransom noumber spot
var rnd = 1;
var currentId = 821;
//the snake itself as an array
var lastpart = [currentId, 1, 1, 1];
let currentDiv = document.getElementById(currentId)
 
createGame();

function startgame(e){
  startbutton.remove()
  //fisrt dot of snake
  var middle = document.getElementById('821');
  middle.style.backgroundColor = 'yellow'
  currentId = middle.id;
  lastpart = [currentId, 1, 1, 1];
  direction = ""
  //listen to keystorke direction
  document.addEventListener("keydown", keydirection)
  nextdot();
}
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
  let foodColors = ["white", "blue", "pink", "green","cyan"];
  rnd = Math.floor((Math.random() * 1600 + 1))
  var newfood = document.getElementById(rnd)
  newfood.style.backgroundColor = "white"
  for (c in foodColors){
    var j = Math.floor(Math.random() * (foodColors.length));
    newfood.style.backgroundColor = foodColors[j];
  } 
  while (lastpart.includes(rnd)) {
    rnd = Math.floor((Math.random() * 1600 + 1))
}

}
//if the snake hits himself
function hitMyFace(interval) {
  let las = lastpart.slice(1, lastpart.length);
  if (las.includes(currentId)) {
    clearInterval(interval)
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
            dead(leftD)
          }
          else {
            if (direction != "l") {
              clearInterval(leftD);
            }
            currentId = Number(currentId) - 1;
            codecaller(leftD)                      
          }
        }, 100);
      }
      break;

    case 38://direction up
      if (direction != "d") {
        direction = "u";
        let upD = setInterval(function () {
          if (currentId > 0 && currentId < 41) {
            clearInterval(upD)
            dead(upD)
          }
          else {
            if (direction != "u") {
              clearInterval(upD);
            }
            currentId = Number(currentId) - 40;
            codecaller(upD)           
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
            dead(rightD)
          }
          else {
            if (direction != "r") {
              clearInterval(rightD);
            }
            currentId = Number(currentId) + 1;
            codecaller(rightD)             
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
            dead(downD)
          }
          else {
            if (direction != "d") {
              clearInterval(downD);
            }
            currentId = Number(currentId) + 40;
            codecaller(downD)            
          }
        }, 100);
      }
      break;
    default:
  }
}
function codecaller(interval){
  let currentDiv = document.getElementById(currentId)
  currentDiv.style.backgroundColor = 'yellow'
  lastpart.unshift(currentId)
  lastpart.pop();
  looper();
  foodCollector();          
  hitMyFace(interval);
}         

function dead(id){
  console.log("dead")
  clearInterval(id)
  document.removeEventListener("keydown", keydirection)
  let loose = document.createElement("button")
  loose.setAttribute("class", "button button2");
  loose.innerHTML = "Play Again"
  document.getElementById("container").appendChild(loose)
  loose.addEventListener("click", newgame)
}
function newgame(){
  document.getElementsByTagName("button")[0].remove()
  for (let i = 1; i < gridBoxSize; i++) {
    containerBox.children[i].style.backgroundColor = "black"  
  }
  startgame();
}
