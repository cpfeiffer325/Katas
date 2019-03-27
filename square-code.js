const squareCode = function(message) {
  var str = message.split(" ").join("");
  var n = Math.ceil(Math.sqrt(str.length));
  var arr = [], cols = n;
  var output = [];

  for ( var y = 0; y < cols; y++ ) {
    arr[y] = [];
}
  for (var i = 0; i < n; i++) {
    for (var j = i; j < str.length; j+=n) {
      arr[i].push(str.charAt(j));
    }
  }
  for (var k = 0; k < arr.length; k++) {
    output[k] = arr[k].join("");
  }
return output.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
