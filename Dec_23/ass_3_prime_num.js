var num = prompt("Enter the number");
num = parseInt(num);

cof = 0;

for(i = 2; i <= num-1; i = i + 1)
{
    if(num % i == 0)
    {
        cof = cof + 1;
        break;
    }
}
if(cof == 1)
{
    alert("Entered number is not prime");
}
else
{
    alert("Entered number is prime");
}