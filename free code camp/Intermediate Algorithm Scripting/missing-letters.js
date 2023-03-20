/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
  const arr = "abcdefghijklmnopqrstuvwxyz".split("");
  const start = arr.indexOf(str[0]);
  const end = arr.indexOf(str[str.length - 1]) + 1;
  const newArr = arr.slice(start, end);
  const newStr = newArr.filter(el => str.indexOf(el) < 0).join("");
  
  return newStr ? newStr : undefined;
}

fearNotLetter("abc");