module.exports = function solveSudoku(matrix) {
  //find empty place
  const curPos = isEmpty(matrix);

  // if there is no empty sudocu is solved
  if (!curPos) { 
    return true;
  }

  // put number one by one to empty place
  for (let i = 1; i <= 9; i++) {
    const curNum = i;
    // console.log('curNum: ', curNum);
    const row = curPos[0];
    const col = curPos[1];
    const valid = isValid(curNum, row, col, matrix);
    // console.log('row, col: ', row, col);
    if( valid ) {
      matrix[row][col] = curNum;
      if(solveSudoku(matrix)) {
        return matrix;
      } 
      matrix[row][col] = 0;
    
    }
  }

  function isEmpty(matrix) {
    let pos = [];
    // debugger;
    for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++) {
        if(matrix[i][j] == 0) {
          pos.push(i);
          pos.push(j);
          // console.log(pos);
          return pos;
        }
       }
     }
   return null;  
  }

  function isValid (num, row, col, arr) {
   //check row
   for( let i = 0; i < 9; i++) {
     if (matrix[row][i] === num && i!== col) {
       return false;
     }
   }

   //ckeck column
   for( let i = 0; i < 9; i++) {
     if (matrix[i][col] === num && i !== row) {
       return false;
     }
   }

   //check square, find start of this square
   const squareRow = Math.floor( row / 3) * 3;
   const squareCol = Math.floor( col / 3) * 3;

   for (let i = squareRow; i < squareRow + 3; i++) {
     for (let j = squareCol; j < squareCol + 3; j++ ) {
       let curNum = matrix[i][j];
       if (curNum === num && i!== row && j!== col ){
         return false;
       }
     }
   }
   return true;
  }

 return false;
}