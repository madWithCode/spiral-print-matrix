printData = A => {
  let colStart = 0, rowStart = 0, colEnd = A[0].length, rowEnd = A.length;
  const resultant = [];
 
  while (colStart < colEnd && rowStart < rowEnd) {

    for (let i = colStart; i < colEnd; ++i) {
      resultant.push(A[rowStart][i]);
    }
    rowStart++;

    for (let i = rowStart; i < rowEnd; ++i) {
      resultant.push(A[i][colEnd-1]);
    }
    colEnd--;

    if (rowStart < rowEnd) {
      for (let i = colEnd-1; i >= colStart; --i) {
        resultant.push(A[rowEnd-1][i]);
      }
      rowEnd--;
    }

    if (colStart < colEnd) {
      for (let i = rowEnd-1; i >= rowStart; --i) {
        resultant.push(A[i][colStart]);
      }
      colStart++;
    }
  }
  return resultant;
}

const Arr = [
  [1, 2],[3,4]
];

console.log(printData(Arr));

