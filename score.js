var BOARD = 
    [
      /* Row 1 */ ['3W', '--', '--', '2L', '--', '--', '--', '3W'],
      /* Row 2 */ ['--', '2W', '--', '--', '--', '3L', '--', '--'],
      /* Row 3 */ ['--', '--', '2W', '--', '--', '--', '2L', '--'],
      /* Row 4 */ ['2L', '--', '--', '2W', '--', '--', '--', '2L'],
      /* Row 5 */ ['--', '--', '--', '--', '2W', '--', '--', '--'],
      /* Row 6 */ ['--', '3L', '--', '--', '--', '3L', '--', '--'],
      /* Row 7 */ ['--', '--', '2L', '--', '--', '--', '2L', '--'],
      /* Row 8 */ ['3L', '--', '--', '2L', '--', '--', '--', '*'],
      ];

/**
 * Returns the raw letter score.
 * @example letterScore('Z') -> 10
 */
function letterScore(letter) {
  //        A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P   Q  R  S  T  U  V  W  X  Y  Z
  var LS = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];
  var asciiVal = letter.charCodeAt(0);
  return LS[asciiVal - 65];
}

/**
 * Returns the letter multiple at (row, col)
 *
 * @example letterMultAt (1, 1) -> 1
 * @example letterMultAt (1, 4) -> 2
 * @example letterMultAt(2, 6) -> 3
 */
function letterMultAt(row, col) {
  var colPrime =  (col < 8) ? col : 14 - col;
  var rowPrime =  (row < 8) ? row : 14 - row;
  var code = BOARD[rowPrime][colPrime];
  var val = 1;
  if (code === '2L') val = 2;
  else 
    if (code === '3L') val = 3;
  return val;
}

/**
 * Returns the word multiple at (row, col)
 * @example wordMultAt(1, 1) = 3
 */
function wordMultAt(row, col) {
  return 0;
}

/**
 * Returns the final word score at (row, col)
 */
function wordScoreAt(word, row, col) {
   return 99;
}


function unitTestLetterScore() {
  console.log( letterScore('K') === 5 ? 'Passed': 'Failed');
  console.log( letterScore('X') === 8 ? 'Passed': 'Failed');
  console.log( letterScore('Q') === 10 ? 'Passed': 'Failed');
  console.log( letterScore('Z') === 10 ? 'Passed': 'Failed');
  console.log( BOARD[3][3] == '2W' ? 'Passed' : 'Failed');
  console.log( BOARD[7][7] == '*' ? 'Passed' : 'Failed');
  console.log(letterMultAt(13,13) === 1 ? 'Passed' : 'Failed');
  console.log(letterMultAt(14,14) === 1 ? 'Passed': 'Failed');
  console.log(letterMultAt(9, 9) === 3 ? 'Passed' : 'Failed');

}

/**
 * Testing area
 */
function showScore(){
  unitTestLetterScore();
  document.getElementById("scoreOut").innerHTML = letterMultAt(9, 9);
}
