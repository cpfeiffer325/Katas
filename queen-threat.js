let whiteQueen = [0, 0];
let blackQueen = [7, 5];

function generatedBoard(w, b) {
  var board = [];

  for (var rows = 0; rows < 8; rows++) {
    board[rows] = [];
    for (var cols = 0; cols < 8; cols++) {
      board[rows][cols] = 0;
    }
  }
  board[w[1]][w[0]] = 1;
  board[b[1]][b[0]] = 1;
  return board;
}

function queenThreat(w, b) {
  if(w[0]===b[0]||w[1]===b[1]||w[0]-b[0]===w[1]-b[1]||w[0]+w[1]===b[0]+b[1]) {
    return true;
  } else {
    return false;
  }
}

console.log(generatedBoard(whiteQueen, blackQueen));
console.log(queenThreat(whiteQueen, blackQueen));