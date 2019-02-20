let numberOfVowels = function(data) {
  var count = 0;
  for (var n = 0; n < data.length; n++) {
    if (data.charAt(n) === 'a' || data.charAt(n) === 'e' || data.charAt(n) === 'i' || data.charAt(n) === 'o' || data.charAt(n) === 'u') {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));