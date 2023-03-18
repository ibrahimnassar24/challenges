function countingSort(arr) {
  let max = 0;
  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(`the max is ${max}`);

  const countArr = new Array(max + 1);
  for(let i = 0; i < countArr.length; i++) {
    countArr[i] = 0;
  }
  console.log(`the count array is filled with zeroes ${countArr}`);

  for(let i = 0; i < arr.length; i++) {
    countArr[arr[i]]++;
  }
  console.log(`the count array ${countArr}`);

  for(let i = 1; i < countArr.length; i++) {
    countArr[i] += countArr[i-1];
  }
  console.log(`the collective array ${countArr}`);

  const output = [];
  for(let i = 0; i < arr.length; i++) {
    output[countArr[arr[i]]-1] = arr[i];
    countArr[arr[i]]--;
  }
  console.log(`final sort ${output}`);

}
const n = [1, 2, 3, 1, 3, 4, 4, 2, 6, 5, 10, 12];
countingSort(n);