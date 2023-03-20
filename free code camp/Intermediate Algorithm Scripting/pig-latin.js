/*
Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end.
*/
function translatePigLatin(str) {
  const vowels = /[aeiou]/;
  

  if(vowels.test(str[0])) {
    return str + "way";
  }

  if(!str.match(vowels)) {
    return str + "ay";
  }

  const newStr = str.split("");
  let i = 0;

  while(!vowels.test(newStr[0]) && i < newStr.length) {
    newStr.push(newStr.shift());
    i++;
  }

  return newStr.join("") + "ay";
}

const res = translatePigLatin("wqsd");
console.log(res)