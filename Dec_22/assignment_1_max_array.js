var arr = [];

var n = prompt("Enter the First Number")
n = parseInt(n);
arr.push(n);
var n = prompt("Enter the Second Number")
n = parseInt(n);
arr.push(n);
var n = prompt("Enter the Third Number")
n = parseInt(n);
arr.push(n);

console.log(arr);

if((arr[0] >= arr[1]) && (arr[0] >= arr[2]))
{
    aleconsole.logt(arr[0]);
}
else if((arr[1] >= arr[0]) && (arr[1] >= arr[2]))
{
    console.log(arr[1]);
}
else
{
    console.log(arr[2]);
}