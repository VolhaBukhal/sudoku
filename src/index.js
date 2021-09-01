module.exports = function solveSudoku(matrix) {
  let numbersSet = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
  let tempSet = [...numbersSet];
  let arr = matrix; 
  let n = arr[0].length - 1;
  debugger;
  for (let i = 0; i < n; i++ ) {
      if( arr[i].includes(0) ) {  //if row has 0 start traverse this row
          for (let j = 0; j <= n; j++) {
              let curNum = arr[i][j];
              if(tempSet.indexOf(curNum) !== -1) {
                  tempSet.splice(tempSet.indexOf(curNum), 1); // if there is a number in row -> remove if from tempSet
              } else { // take first number from tempSet and put to this place only after chacking column and square
                  for(let insertNum of tempSet) {
                      let column = getColumn (arr, j);
                      let square = getSquare (arr, i, j);
                      if ( !column.includes(insertNum) && !square.includes(insertNum)) {
                          arr[i][j] = insertNum;
                          break;
                      }
                  }
              }
              continue; 
          }
      } else {
          continue; // go to  next row;
      }
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
  
  function getSquare (arr, rowInd, colInd) {
    let squarNumbers = [];
    debugger;
    if( [0, 1, 2].includes(rowInd)) {
        if ( [0, 1, 2].includes(colInd) ) {        //row[0 - 2] col[0 - 2]
            squarNumbers = getRowFromSquare(0, 0);
        } else if ( [3, 4, 5].includes(colInd) ) {  // row[0 - 2] col[3 - 5]
            squarNumbers = getRowFromSquare(0, 3);
        } else if ( [6, 7, 8].includes(colInd) ) {  //row[0 - 2] col[6 - 8]
            squarNumbers = getRowFromSquare(0, 6); 
        }   
    } else if ( [3, 4, 5].includes(rowInd)) {
        if ( [0, 1, 2].includes(colInd) ) {        //row[3 - 5] col[0 - 2]
            squarNumbers = getRowFromSquare(3, 0); 
        } else if ( [3, 4, 5].includes(colInd) ) {  // row[3 - 5] col[3 - 5]
            squarNumbers = getRowFromSquare(3, 3); 
        } else if ( [6, 7, 8].includes(colInd) ) {  //row[3 - 5] col[6 - 8]
            squarNumbers = getRowFromSquare(3, 6);
        } 
    } else {
        if ( [0, 1, 2].includes(colInd) ) {        //row[6 - 8] col[0 - 2]
            squarNumbers = getRowFromSquare(6, 0); 
        } else if ( [3, 4, 5].includes(colInd) ) {  // row[6 -8] col[3 - 5]
            squarNumbers = getRowFromSquare(6, 3); 
        } else if ( [6, 7, 8].includes(colInd) ) {  //row[6 - 8] col[6 - 8]
            squarNumbers = getRowFromSquare(6, 6);
        } 
    }
    return squarNumbers;
  }
  function getRowFromSquare(rowInd, colInd) {
    let smallSquare = [];
    for(let i = rowInd; i <= rowInd+2; i++) {
        for(let j = colInd; j<=colInd +2 ; j++) {
            smallSquare.push(arr[i][j]);
        }
    }
    return smallSquare;
  }




  return arr;

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

// function getSquare (arr, rowInd, colInd) {
//   let squarNumbers = [];
//   debugger;
//   if( [0, 1, 2].includes(rowInd)) {
//       if ( [0, 1, 2].includes(colInd) ) {        //row[0 - 2] col[0 - 2]
//           squarNumbers = getRowFromSquare(0, 0);
//       } else if ( [3, 4, 5].includes(colInd) ) {  // row[0 - 2] col[3 - 5]
//           squarNumbers = getRowFromSquare(0, 3);
//       } else if ( [6, 7, 8].includes(colInd) ) {  //row[0 - 2] col[6 - 8]
//           squarNumbers = getRowFromSquare(0, 6); 
//       }   
//   } else if ( [3, 4, 5].includes(rowInd)) {
//       if ( [0, 1, 2].includes(colInd) ) {        //row[3 - 5] col[0 - 2]
//           squarNumbers = getRowFromSquare(3, 0); 
//       } else if ( [3, 4, 5].includes(colInd) ) {  // row[3 - 5] col[3 - 5]
//           squarNumbers = getRowFromSquare(3, 3); 
//       } else if ( [6, 7, 8].includes(colInd) ) {  //row[3 - 5] col[6 - 8]
//           squarNumbers = getRowFromSquare(3, 6);
//       } 
//   } else {
//       if ( [0, 1, 2].includes(colInd) ) {        //row[6 - 8] col[0 - 2]
//           squarNumbers = getRowFromSquare(6, 0); 
//       } else if ( [3, 4, 5].includes(colInd) ) {  // row[6 -8] col[3 - 5]
//           squarNumbers = getRowFromSquare(6, 3); 
//       } else if ( [6, 7, 8].includes(colInd) ) {  //row[6 - 8] col[6 - 8]
//           squarNumbers = getRowFromSquare(6, 6);
//       } 
//   }
//   return squarNumbers;
// }
// function getRowFromSquare(rowInd, colInd) {
//   let smallSquare = [];
//   for(let i = rowInd; i <= rowInd+2; i++) {
//       for(let j = colInd; j<=colInd +2 ; j++) {
//           smallSquare.push(arr[i][j]);
//       }
//   }
//   return smallSquare;
// } 
