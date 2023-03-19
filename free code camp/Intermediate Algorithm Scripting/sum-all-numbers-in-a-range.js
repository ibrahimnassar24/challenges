/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.
*/
function sumAll(arr) {
  const [start, end] = arr.sort((a, b) => a - b);
  let sum = 0;

  for(let i = start; i <= end; i++) {
    sum += i;
  }
  
  return sum;
}

sumAll([1, 4]);