var n = prompt("Enter the number");
n = parseInt(n);

var output = "";
for (var j = 1; j <= n; j = j + 1) {
  for (var i = 1; i <= j; i = i + 1) {
   output = output + "☺";
  }
  output = output + "<br/>";
}
document.write(output);