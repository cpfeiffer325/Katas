///////////camelCase//////////

let camelCase = function(input) {
  var arr = input.split(" ");
  var output = [];

  for (var i = 0; i < arr.length; i++) {
    if (i > 0) {
      var char = "";
      char =  arr[i].charAt(0).toUpperCase();
      output.push(char + arr[i].slice(1));
    } else {
      output.push(arr[i]);
    }
  }
  return output.join("");
};
console.log(camelCase("this is a string"));

///////////pascal//////////

let pascal = function(input) {
  var arr = input.split(" ");
  var output = [];

  for (var i = 0; i < arr.length; i++) {
    if (i >= 0) {
      var char = "";
      char =  arr[i].charAt(0).toUpperCase();
      output.push(char + arr[i].slice(1));
    } else {
      output.push(arr[i]);
    }
  }
  return output.join("");
};
console.log(pascal("this is a string"));

///////////snake//////////

let snake = function(input) {
  var arr = input.split(" ").join("_");
  return arr;
};
console.log(snake("this is a string"));

///////////kebab//////////

let kebab = function(input) {
  var arr = input.split(" ").join("-");
  return arr;
};
console.log(kebab("this is a string"));

///////////title//////////

let title = function(input) {
  var arr = input.split(" ");
  var output = [];

  for (var i = 0; i < arr.length; i++) {
    if (i >= 0) {
      var char = "";
      char =  arr[i].charAt(0).toUpperCase();
      output.push(char + arr[i].slice(1));
    } else {
      output.push(arr[i]);
    }
  }
  return output.join(" ");
};
console.log(title("this is a string"));

///////////vowel//////////

let vowel = function(input) {
  var output = [];
  for (var i = 0; i < input.length; i++) {
    var n = input.charAt(i);
    if (n === "a" || n === "e" || n === "i" || n === "o" || n === "u" ) {
      var char = "";
      char = input.charAt(i).toUpperCase();
      output.push(char);
    } else {
      output.push(n);
    }
  }
  return output.join("");
};
console.log(vowel("this is a string"));

///////////consonant//////////

let consonant = function(input) {
  var output = [];
  for (var i = 0; i < input.length; i++) {
    var n = input.charAt(i);
    if (n === "a" || n === "e" || n === "i" || n === "o" || n === "u" ) {
      output.push(n);
    } else {
      var char = "";
      char = input.charAt(i).toUpperCase();
      output.push(char);
    }
  }
  return output.join("");
};
console.log(consonant("this is a string"));


///////////upper snake//////////

let upperSnake = function(input) {
  var output = [];
  for (var i = 0; i < input.length; i++) {
    var char = "";
    char = input.charAt(i).toUpperCase();
    output.push(char);
  }
  return output.join("").split(" ").join("_");
};


console.log(upperSnake("this is a string"));
