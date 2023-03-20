/*
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      const temp = steamrollArray(arr[i]);
      newArr.push(...temp);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);