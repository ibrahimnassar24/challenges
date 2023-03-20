/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. 
Return the results as a 2d array.
For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
*/
function pairElement(str) {
  const pairs = [];
  for(let i = 0; i < str.length; i++) {
    pairs.push([str[i], getPair(str[i])]);
  }
  return pairs;
  function getPair(pair) {
    switch (pair) {
      case "A":
      return "T";
      case "T":
      return "A";
      case "C":
      return "G";
      case "G":
      return "C"
    }
  }
}

pairElement("GCG");