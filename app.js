console.log('helloh');
// view Game Logic
var empty = false;
var click = false;
var currentPlayerIsntOne = false;

function updateBoard() {
var id = this.id;
if((!click) && !currentPlayerIsntOne == true) {
document.getElementById(id).innerHTML = "X";
document.getElementById('Player').innerHTML = "Player 2's Turn";
click = true;
currentPlayerIsntOne = true;
}
else if(click && currentPlayerIsntOne) {
document.getElementById(id).innerHTML = "O";
document.getElementById('Player').innerHTML = "Player 1's Turn";
click = false;
currentPlayerIsntOne = false;
}
}

for(var i = 1; i < 10; i++) {
document.getElementById('square'+i).onclick = updateBoard;
}

// model Game Logic





// // model Game Logic
// var gamePlaying = true;
//   // Row 1
//   if(document.getElementById('square1').innerHTML === "X" && document.getElementById('square2').innerHTML === "X" && document.getElementById('square3').innerHTML === "X") {
//     gamePlaying = false;
//     console.log('hello');
//     document.getElementById('Player').innerHTML = "Player 1 Won!";
//   }
//   if(document.getElementById('square1').innerHTML == "O" && document.getElementById('square2').innerHTML == "O" && document.getElementById('square3').innerHTML == "O") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 2 Won!";
//   }
//   // Row 2
//   if(document.getElementById('square4').innerHTML == "X" && document.getElementById('square5').innerHTML == "X" && document.getElementById('square6').innerHTML == "X") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 1 Won!";
//   }
//   if(document.getElementById('square4').innerHTML == "O" && document.getElementById('square5').innerHTML == "O" && document.getElementById('square6').innerHTML == "O") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 2 Won!";
//   }
//   // Row 3
//   if(document.getElementById('square7').innerHTML == "X" && document.getElementById('square8').innerHTML == "X" && document.getElementById('square9').innerHTML == "X") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 1 Won!";
//   }
//   if(document.getElementById('square7').innerHTML == "O" && document.getElementById('square8').innerHTML == "O" && document.getElementById('square9').innerHTML == "O") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 2 Won!";
//   }
//   // Column 1
//   if(document.getElementById('square1').innerHTML == "X" && document.getElementById('square4').innerHTML == "X" && document.getElementById('square7').innerHTML == "X") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 1 Won!";
//   }
//   if(document.getElementById('square1').innerHTML == "O" && document.getElementById('square4').innerHTML == "O" && document.getElementById('square7').innerHTML == "O") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 2 Won!";
//   }
//   // Column 2
//   if(document.getElementById('square2').innerHTML == "X" && document.getElementById('square5').innerHTML == "X" && document.getElementById('square8').innerHTML == "X") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 1 Won!";
//   }
//   if(document.getElementById('square2').innerHTML == "O" && document.getElementById('square5').innerHTML == "O" && document.getElementById('square8').innerHTML == "O") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 2 Won!";
//   }
//   // Row 3
//   if(document.getElementById('square3').innerHTML == "X" && document.getElementById('square6').innerHTML == "X" && document.getElementById('square9').innerHTML == "X") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 1 Won!";
//   }
//   if(document.getElementById('square3').innerHTML == "O" && document.getElementById('square6').innerHTML == "O" && document.getElementById('square9').innerHTML == "O") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 2 Won!";
//   }
//   // Diagonal Rows
//   if(document.getElementById('square1').innerHTML == "O" && document.getElementById('square5').innerHTML == "O" && document.getElementById('square9').innerHTML == "O") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 2 Won!";
//   }
//   if(document.getElementById('square1').innerHTML == "X" && document.getElementById('square5').innerHTML == "X" && document.getElementById('square9').innerHTML == "X") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 1 Won!";
//   }
//   if(document.getElementById('square3').innerHTML == "O" && document.getElementById('square5').innerHTML == "O" && document.getElementById('square7').innerHTML == "O") {
//     gamePlaying = false;
//     document.getElementById('Player').innerHTML = "Player 2 Won!";
//   }
//   if(document.getElementById('square3').innerHTML == "X" && document.getElementById('square5').innerHTML == "X" && document.getElementById('square7').innerHTML == "X") {
//     gamePlaying = false;
//     document.getElementById('PlayerStatus').innerHTML = "Player 1 Won!";
//     console.log('You won');
//   }





// controller