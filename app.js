// Model game Logic
var gamePlaying = true;
var click = false;
var currentPlayerIsntOne = false;

function reset() {
  for(var i = 1; i < 10; i++) {
    document.getElementById('square'+i).innerHTML = '';
  }
  document.getElementById('Player').innerHTML = "Player 1's Turn";
  document.getElementById('PlayerStatus').innerHTML = "";
  click = false;
  currentPlayerIsntOne = false;

}

document.getElementById('reset').onclick = function() {
  reset();
}

function checkWinner() {
    // Row 1
    if(document.getElementById('square1').innerHTML === "X" && document.getElementById('square2').innerHTML === "X" && document.getElementById('square3').innerHTML === "X") {
      gamePlaying = false;
      console.log('testing:', document.getElementById('square1').innerHTML);
      document.getElementById('PlayerStatus').innerHTML = "Player 1 Won!";
      document.getElementById('Player').innerHTML = "";
    }

    if(document.getElementById('square1').innerHTML == "O" && document.getElementById('square2').innerHTML == "O" && document.getElementById('square3').innerHTML == "O") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 2 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  // Row 2
  if(document.getElementById('square4').innerHTML == "X" && document.getElementById('square5').innerHTML == "X" && document.getElementById('square6').innerHTML == "X") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 1 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  if(document.getElementById('square4').innerHTML == "O" && document.getElementById('square5').innerHTML == "O" && document.getElementById('square6').innerHTML == "O") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 2 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  // Row 3
  if(document.getElementById('square7').innerHTML == "X" && document.getElementById('square8').innerHTML == "X" && document.getElementById('square9').innerHTML == "X") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 1 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  if(document.getElementById('square7').innerHTML == "O" && document.getElementById('square8').innerHTML == "O" && document.getElementById('square9').innerHTML == "O") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 2 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  // Column 1
  if(document.getElementById('square1').innerHTML == "X" && document.getElementById('square4').innerHTML == "X" && document.getElementById('square7').innerHTML == "X") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 1 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  if(document.getElementById('square1').innerHTML == "O" && document.getElementById('square4').innerHTML == "O" && document.getElementById('square7').innerHTML == "O") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 2 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  // Column 2
  if(document.getElementById('square2').innerHTML == "X" && document.getElementById('square5').innerHTML == "X" && document.getElementById('square8').innerHTML == "X") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 1 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  if(document.getElementById('square2').innerHTML == "O" && document.getElementById('square5').innerHTML == "O" && document.getElementById('square8').innerHTML == "O") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 2 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  // Row 3
  if(document.getElementById('square3').innerHTML == "X" && document.getElementById('square6').innerHTML == "X" && document.getElementById('square9').innerHTML == "X") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 1 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  if(document.getElementById('square3').innerHTML == "O" && document.getElementById('square6').innerHTML == "O" && document.getElementById('square9').innerHTML == "O") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 2 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  // Diagonal Rows
  if(document.getElementById('square1').innerHTML == "O" && document.getElementById('square5').innerHTML == "O" && document.getElementById('square9').innerHTML == "O") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 2 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  if(document.getElementById('square1').innerHTML == "X" && document.getElementById('square5').innerHTML == "X" && document.getElementById('square9').innerHTML == "X") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 1 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  if(document.getElementById('square3').innerHTML == "O" && document.getElementById('square5').innerHTML == "O" && document.getElementById('square7').innerHTML == "O") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 2 Won!";
    document.getElementById('Player').innerHTML = "";
  }
  if(document.getElementById('square3').innerHTML == "X" && document.getElementById('square5').innerHTML == "X" && document.getElementById('square7').innerHTML == "X") {
    gamePlaying = false;
    document.getElementById('PlayerStatus').innerHTML = "Player 1 Won!";
    console.log('You won');
    document.getElementById('Player').innerHTML = "";
  }
  if (gamePlaying === false) {
    alert("please press the reset button");
    gamePlaying = true;
    return;
  }

  }


// view Game Logic and Controller

function updateBoard() {
var id = this.id;
if((!click) && !currentPlayerIsntOne && document.getElementById(id).innerHTML.trim() == "") {
document.getElementById(id).innerText = "X";
document.getElementById(id).innerText.trim();
document.getElementById('Player').innerHTML = "Player 2's Turn";
click = true;
currentPlayerIsntOne = true;
}
else if(click && currentPlayerIsntOne && document.getElementById(id).innerHTML.trim() == "") {
document.getElementById(id).innerText = "O";
document.getElementById(id).innerText.trim();
document.getElementById('Player').innerHTML = "Player 1's Turn";
click = false;
currentPlayerIsntOne = false;
}

checkWinner();



}
// set up the clickHandlers
for(var i = 1; i < 10; i++) {
document.getElementById('square'+i).onclick = updateBoard;
}





// model Game Logic
var playerStates = {

}







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