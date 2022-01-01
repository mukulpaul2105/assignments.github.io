var num = prompt("Enter the number");
num = parseInt(num);

cof = 0;
for(i = 2; i <= num - 1;)
{
    if(num % i == 0)
    {
        cof = cof + 1;
        
    }
    i = i + 1
}
if(cof % 2 == 0)
{
    alert("Entered number is not a Perfect Square");
}
else
{
    alert("Entered number is a Perfect Square");
}
