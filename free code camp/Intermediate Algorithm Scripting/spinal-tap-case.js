/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
in the string wanted to be converted, words can be separated by spaces, capital litters or underscor. 
*/
function spinalCase(str) {
  const splitOnSpace = str.split(" ");
  const splitOn_ = splitOnSpace.map(el => el.split("_"));
  const pieces = flaten(splitOn_);
  const words = [];

  for(const piece of pieces) {
    let word = piece[0];
    for(let i = 1; i < piece.length; i++) {
      if (/[A-Z]/.test(piece[i])) {
        words.push(word);
        word = piece[i];
      } else {
        word += piece[i];
      }
    }
    words.push(word)
  }
  console.log(words);
  return words.join("-").toLowerCase();
  function flaten(arr) {
    const flat = [];
    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        const result = flaten(arr[i]);
        flat.push(...result);
      } else {
        flat.push(arr[i])
      }
    }
    return flat;
  }
}

spinalCase('This Is Spinal Tap');