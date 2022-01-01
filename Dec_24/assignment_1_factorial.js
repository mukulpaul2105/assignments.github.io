var n = prompt("Enter the number");
n = parseInt(n);

factorial = 1;
for( i = 1; i <=n; i = i + 1)
{
    factorial = factorial * i;
}
console.log(factorial);