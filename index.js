//if the player has won or not
var hasWon = false;
window.rollDice = () => {
  if (hasWon) {
    return;
  }

let currentPlayer = players[currentPlayerTurn];

roll = Math.floor(Math.random() * 5 + 1);
console.log(currentPlayer.name +", You rolled", roll); //keeping track of rolls
  //incrementing the position after the roll using the dice value
  if(currentPlayer.position === 0 && roll != 1){ //the first turn has to have 1
    currentPlayer.position = 0; //otherwise the position stays as it is
    console.log("Bad luck, you need to roll a 1!") //logs it that I need a one
  }else{ //else the # of roll is added to the position of the player
  currentPlayer.position += roll;
  ladders.forEach(ladder => { //looping through each ladder
    //if the starting of the ladder is equal to player's position
    if (ladder.start === currentPlayer.position) {
      console.log("yay"); //print this on the screen
      currentPlayer.position = ladder.end; //step to the end of the ladder
    }
  });

  //if the curretPlayer has the last position
  if (currentPlayer.position > 99) {
    console.log(currentPlayer.name + " has won!");
    hasWon = true; //hasWon is true = player wins
  }


  if (currentPlayer.position === position) {
 diff = currentPlayer.position - position;
    currentPlayerPosition = position - diff;
  }
}
  currentPlayerTurn++;
  if (currentPlayerTurn >= players.length) {
    currentPlayerTurn = 0;
  }


//two players
players = [{name: "P1",position: 0},{name: "P2",position: 0}];

let currentPlayerTurn = 0;

ladders = [{start: 15,end: 5},{start: 23,end: 16},{start: 8,end: 20},
{start: 19,end: 24}];

for (var y = height; y >= 0; y--) {
  let row = [];


  players.forEach(player => {
    let square = null;
    board.forEach(row => {
      row.forEach(square => {
        if (square.position === player.position) {
          boardOnScreen += `<div class=player style="top:${square.y *
            boardSize +
            5}px; left:${square.x * boardSize +
            5}px;background-color:${player.color}"></div>`;
        }
      });
    });
  });

  ladders.forEach(ladder => {
    //let start = 0;
    let startPos = { x: 0, y: 0 };
    let endPos = { x: 0, y: 0 };

    board.forEach(row => {
      row.forEach(square => {
        if (square.position === ladder.start) {
          startPos.x = square.x * boardSize;
          startPos.y = square.y * boardSize;
        }

        if (square.position === ladder.end) {
          endPos.x = square.x * boardSize;
          endPos.y = square.y * boardSize;
        }
      });
    });

    isLadder = ladder.end > ladder.start;


function drawLine({ color, startPos, endPos }) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(startPos.x + 35, startPos.y + 20);
  ctx.lineTo(endPos.x + 25, endPos.y + 25);
  ctx.lineWidth = 15;
  ctx.strokeStyle = color;
  ctx.stroke();
