export function processText(text, action){
  switch (action) {
    case "reverse":
      return text.split('').reverse().join('');
    case "uppercase":
      return text.toUpperCase();
    case "lineCount":
      return text.split('\n').length;
  }
}
