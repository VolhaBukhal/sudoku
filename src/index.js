module.exports = function solveSudoku(matrix) {
  // your solution
}

function getColumn (arr, index) {
  let column = [];
  for (let i = 0; i < arr[0].length -1; i++ ) {
    for (let j = 0; j < arr.length; j++) {
      if ( j == index) {
        column.push(arr[i][j]);
      }
    }
  }
  return column;
}
