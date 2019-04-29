let camelCase = function(input) {
  var arr = input.split(" ");
  var camelCase = [];

  for (var i = 0; i < arr.length; i++) {
    if (i > 0) {
      var char = "";
      char =  arr[i].charAt(0).toUpperCase();
      camelCase.push(char + arr[i].slice(1));
    } else {
      camelCase.push(arr[i]);
    }
  }
  return camelCase.join("");
};

console.log(camelCase("this is a string"));
