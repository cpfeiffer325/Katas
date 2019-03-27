const urlEncode = function(text) {
  var str = text.trim();
  var arr = str.split("");

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      arr.splice(i, 1, "%20");
    }
  }
  return arr.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));