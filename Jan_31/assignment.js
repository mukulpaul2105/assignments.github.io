
var arr = [2,7,11,15,14,5,9,6];

const target = 19;
var result = [];

for(i = 0; i < arr.length; i++) {
   for(j = 0; j < arr.length; j++) {
      if(arr[i] + arr[j] == target) {
         result.push(arr[i]);
      } 
   }
}

console.log(arr);
console.log(result);

var container = document.querySelector(".container");
var output = document.getElementById("output");

output.addEventListener("click", func);

function func() {
   var span1 = document.createElement("span");
   span1.innerText = arr;
   var span2 = document.createElement("span");
   span2.innerText = result;

   container.append(span1, span2);
}

