var num = prompt("Enter the Length of the Matrix");
num = parseInt(num);

function spiralMatrix() {
    var matrix = [];
    var counter = 1,
    rowMin = 0,
    rowMax = num - 1,
    colMin = 0,
    colMax = num - 1;
  
    for (var i = 0; i < num; i++) {
      matrix.push(new Array());
    }
  
    while (colMin <= colMax && rowMin <= rowMax ) {

      for (var row = rowMin; row <= rowMax; row++) {
         matrix[row][colMin] = counter++ ;
         
       }
       colMin++;

      for (var col = colMin; col <= colMax; col++) {
        matrix[rowMax][col] = counter++;
      }
      rowMax--;

      for (var row = rowMax; row >= rowMin; row--) {
         matrix[row][colMax] = counter++;
       }
       colMax--;

      for (var col = colMax; col >= colMin; col--) {
        matrix[rowMin][col] = counter++;
      }
      rowMin++;
      
    }
    return matrix;
  }

  var k = spiralMatrix();
console.log(k);

for( var i = 0; i < num; i ++) {
    document.write(k[i]);
    document.write("<br/>");
}

