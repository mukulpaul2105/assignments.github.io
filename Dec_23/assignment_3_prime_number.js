var a = prompt("Enter the limit");
cof = 0;
// a = parseInt(a);
for(var i = 2; i <= a/2-1;)
  {
    if (a % i == 0)
    cof = cof + 1;
    break;
    //  or 
  //   i = i+1 ;
  }
  {
    if ( cof == 1)
    alert("Entered number is not prime");
    else
    alert("Entered number is prime")
  }