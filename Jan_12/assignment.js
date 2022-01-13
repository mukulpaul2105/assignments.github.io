//Initialising a variable name count
var count = 0;
//printing default value as 0
document.getElementById("counting").innerText = count;
// Function for increment
function increment() {
   count = count + 1;
   document.getElementById("counting").innerText = count;
}
// Function for decrement
function decrement() {
   count = count - 1;
   document.getElementById("counting").innerText = count;
}