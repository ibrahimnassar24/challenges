/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 0 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first seven numbers of the Fibonacci sequence are 0,  1, 1, 2, 3, 5 and 8.
*/
function sumFibs(num) {
  const fibos = [0, 1];
  let sum = 1;

  while(fibos[fibos.length - 1] <= num) {
    const temp = fibos[fibos.length - 1] + fibos[fibos.length - 2];
    fibos.push(temp)
    if(temp % 2 && temp <= num) sum += temp;
  }
  return sum;
}

sumFibs(4);