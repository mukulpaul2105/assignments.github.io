const arr = [
   [4, 6, 7, 3],
   [5, 8, 3, 2],
   [6, 3, 9, 1],
   [3, 9, 5, 4]
];
var sum = 0;
for(i = 0; i < arr.length; i = i + 1) {
   for(j = 0; j < arr[i].length; j = j + 1){
      if(i == j) {
         sum = sum + arr[i][j];
      } 
   }
}console.log(sum);
document.write(sum);