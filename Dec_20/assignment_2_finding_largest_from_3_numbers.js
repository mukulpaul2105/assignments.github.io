
var num1 = prompt("Enter the First Number")
nnum1 = parseInt(num1);

var num2 = prompt("Enter the Second Number")
num2 = parseInt(num2);

var num3 = prompt("Enter the Third Number")
num3 = parseInt(num3);

if((num1 >= num2) && (num1 >= num3))
{
    console.log(num1);
}
else if((num2 >= num1) && (num2 >= num3))
{
    console.log(num2);
}
else
{
    console.log(num3);
}