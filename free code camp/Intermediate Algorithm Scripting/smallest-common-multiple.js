/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/
function smallestCommons(arr) {
  const start = arr[0] < arr[1] ? arr[0] : arr[1];
  const end = arr[0] > arr[1] ? arr[0] : arr[1];
  let scm = start;

  for(let i = start + 1; i <= end; i++) {
    scm = getScm(scm, i);
  }
  return scm;
  function gcd(x, y) {
    const temp = x % y;
    return temp ? gcd(y, temp) : y;
  }

  function getScm(x, y) {
    return (x * y) / gcd(x, y);
  }
}

smallestCommons([1,5]);