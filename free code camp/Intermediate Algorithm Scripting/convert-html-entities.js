/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
  const arr = str.split("");
  for(let i = 0; i < arr.length; i++) {
    if(/['"&<>']/.test(arr[i])) {
      switch(arr[i]) {
        case "'":
        arr[i] = "&apos;";
        break;

        case '"':
        arr[i] = "&quot;";
        break;

        case ">":
        arr[i] = "&gt;";
        break;
        
        case "<":
        arr[i] = "&lt;";
        break;

        default:
        arr[i] = "&amp;";
      }
    }
  }
  return arr.join("");
}

convertHTML("Dolce & Gabbana");