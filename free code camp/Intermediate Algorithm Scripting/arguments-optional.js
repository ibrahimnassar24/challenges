/*
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.
If either argument isn't a valid number, return undefined.
*/
function addTogether() {

  if(arguments.length === 2 
  && (!isNum(arguments[0]) || !isNum(arguments[1]))) {
    return undefined;
  }

  if(arguments.length === 1 && !isNum(arguments[0])) {
    return undefined;
  } else if(arguments.length === 1) { 
    return num => (isNum(num)) ? arguments[0] + num : undefined
  }

  return arguments[0] + arguments[1];
  function isNum(n) {
    return n === Number(n);
  }
}

const res = addTogether(2,3);
console.log(res)