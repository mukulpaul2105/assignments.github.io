var num = prompt("Enter the limit");
num = parseInt(num);
var p = 2; // Prime numbers starts from 2 thats why p = 2
while(num)  //This loop will run upto , if we find any prime number
            //it wiil decremnt and so on upto it become 0
{
  for(i = 2; i < p; i = i + 1) // will divide and check upto 1 less than the number
  {
    if(p % i == 0)
    break;
  }
  if(i == p) // chesking whether the loop copletely executed or not 
              // if not that means number got divided by any number
  {
    console.log(p);
    num = num - 1;
  }
  p = p +1;
}

