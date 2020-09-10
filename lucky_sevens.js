// Write a function called lucky_sevens luckySevens(arr) 
// which takes an array of integers and returns true 
// if any three consecutive elements sum to 7.

let arr = [0,9,7];
let trueOrFalse;

function luckySevens(arr){

  trueOrFalse = false;

// now use this to do it for every set of 3 ordered numbers
//use a for loop to 

  let sum = arr.reduce((a,b) => a + b, 0); 


  if(sum === 7)
{
    trueOrFalse = true;
  }

return trueOrFalse;

}

console.log(luckySevens(arr));