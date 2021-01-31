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
//checks if is isAlive
var isAlive = false;
 
var soundtrack1 = document.getElementById('sounds');
var gameOverSound1 = document.getElementById('soundsover');

var snakeSpeed = 101;
var scoreCount = 0;
createGame();

function gameOverSound(){
    gameOverSound1.loop = false;
    gameOverSound1.autoplay = true;
    gameOverSound1.load();
}

function soundtrack(){
    soundtrack1.loop = true;
    soundtrack1.autoplay = true;
    soundtrack1.load();
}

function bugFix(){
  //fisrt dot of snake
  var middle = document.getElementById('821');
  middle.style.backgroundColor = 'yellow'
  currentId = middle.id;
  lastpart = [currentId, 1, 1, 1];
  direction = ""
}

function startgame(e){
 
  startbutton.remove()
  //fisrt dot of snake
  var middle = document.getElementById('821');
  middle.style.backgroundColor = 'yellow'
  currentId = middle.id;
  lastpart = [currentId, 1, 1, 1];
  direction = ""
  isAlive = true
  //listen to keystorke direction
  document.addEventListener("keydown", keydirection)
  score();
  nextdot();
  soundtrack();
}
//creates the grid of the game
function createGame() {

  for (let i = 1; i <= gridBoxSize; i++) {
    let newCells = document.createElement('div');
    newCells.setAttribute('class', 'gridRows');
    newCells.setAttribute('id', i);
    containerBox.appendChild(newCells);
  }
}
//adds one spot to the snake
function addLength() {
  lastpart.push(1);
  score();
}
function score() {
  scoreCount = lastpart.length - 4;
  let scoreCard = document.getElementById('scoreId');
  scoreCard.innerHTML = "Score: " + scoreCount;
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
  //prevent bug that creates box on snake
  while (lastpart.includes(rnd)) {
      rnd = Math.floor((Math.random() * 1600 + 1))
  }
  var newfood = document.getElementById(rnd)
  for (c in foodColors){
    var j = Math.floor(Math.random() * (foodColors.length));
    newfood.style.backgroundColor = foodColors[j];
  } 
    //makes snake faster eachtime food collected
    if (scoreCount < 20) {
      snakeSpeed = snakeSpeed -= 3;
    }else {
      snakeSpeed = snakeSpeed -= 1;
    }
    console.log(snakeSpeed)
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
            bugFix();
            if(isAlive){
            dead(leftD)
          }
          }
          else {
            if (direction != "l") {
              clearInterval(leftD);
            }
           
            currentId = Number(currentId) - 1;
            codecaller(leftD)                      
          }
        }, snakeSpeed);
      }
      break;
    case 38://direction up
      if (direction != "d") {
        direction = "u";
       let upD = setInterval(function () {
          if (currentId > 0 && currentId < 41) {
            clearInterval(upD)
            bugFix();
            if(isAlive){
            dead(upD)
            }
          }
          else {
            if (direction != "u") {
              clearInterval(upD);
            }
           
            currentId = Number(currentId) - 40;
            codecaller(upD)           
          }
        }, snakeSpeed);
      }
      break;
    case 39://direction right
     if (isAlive) {
      if (direction != "l") {
        direction = "r";
        let rightD = setInterval(function () {
          if (currentId % 40 == 0) {
            clearInterval(rightD)
            bugFix();
            if(isAlive){
            dead(rightD);
            }
          }
          else {
            if (direction != "r") {
              clearInterval(rightD);
            }
           
            currentId = Number(currentId) + 1;
            codecaller(rightD)             
          }
        }, snakeSpeed);
        console.log('right')
      }}
      break;
    case 40://direction down
      if (direction != "u") {
        direction = "d";
        let downD = setInterval(function () {
          if (currentId > 1560 && currentId < 1601) {
            if(isAlive){
            dead()
            
            }
            isAlive = false;
            clearInterval(downD)
            bugFix();
          }
          else {
            if (direction != "d") {
              clearInterval(downD);
            }
           
            currentId = Number(currentId) + 40;
            codecaller(downD)            
          }
        }, snakeSpeed);
      }
      break;
    default:
  }}
  

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
  isAlive = false
  document.removeEventListener("keydown", keydirection)
  soundtrack1.pause();
  gameOverSound();
  clearInterval(id)
  //lose button
  let lose = document.createElement("button")
  lose.setAttribute("class", "button button2");
  lose.innerHTML = "Play Again"
  document.getElementById("container").appendChild(lose)
  lose.addEventListener("click", newgame)

}
function newgame(){
  isAlive = true;
  snakeSpeed = 101;
  document.getElementsByTagName("button")[0].remove()
  for (let i = 1; i < gridBoxSize; i++) {
    containerBox.children[i].style.backgroundColor = "black"  
  }
  gameOverSound1.pause(); 
  soundtrack();
  startgame();
}



