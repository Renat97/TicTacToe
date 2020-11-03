// MODEL LOGIC
var gamePlaying = true;
var click = false;
var currentPlayerIsntOne = false;

var player1 = {
  "winCount": 0
};

var player2 = {
  "winCount": 0
};

var name1 = prompt("What is your name Player1 ?");
var name2 = prompt("What is your name Player2 ?");

// VIEW LOGIC

document.getElementById('Player1').innerHTML += ' ' + name1;
document.getElementById('Player2').innerHTML += ' ' + name2;

function reset() {
  for(var i = 1; i < 10; i++) {
    document.getElementById('square'+i).innerHTML = '';
  }
  if(document.getElementById('PlayerStatus').innerHTML === "Player 1 Won!") {
    document.getElementById('Player').innerHTML = "Player 1's Turn";
    player1['winCount']++;
    document.getElementById('Player1').innerHTML = player1['winCount'];
    document.getElementById('Player1').innerHTML += ' ' + name1;
    click = false;
    currentPlayerIsntOne = false;
  } else if(document.getElementById('PlayerStatus').innerHTML === "Player 2 Won!") {
    player2['winCount']++;
    document.getElementById('Player2').innerHTML = player2['winCount'];
    document.getElementById('Player').innerHTML = "Player 2's Turn";
    document.getElementById('player2').innerHTML += ' ' + name2;
    click = true;
    currentPlayerIsntOne = true;
  }
  document.getElementById('PlayerStatus').innerHTML = "";
}

function checkTie() {
  var count = 0;
  for(let i = 1; i < 10; i++) {
    if(document.getElementById('square'+ i).innerHTML.length > 0) {
      count++;
    }
  }
  if(count === 9) {
    alert('There has been a tie!')
    reset();
  } else {
    return;
  }
}

function rotateBoard() {
  document.getElementById('t01').setAttribute('transform', 'rotate(90)');
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
  } else {
    checkTie();
  }
  }

// CONTROLLER LOGIC, UPDATES MODEL VARIABLES
function updateBoard() {
var id = this.id;
if((!click) && !currentPlayerIsntOne && document.getElementById(id).innerHTML.trim() == "") {
document.getElementById(id).innerText = "X";
document.getElementById(id).innerText.trim();
document.getElementById('Player').innerHTML = "Player 2's Turn";
rotateBoard();
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