let toCamelCase = function(input) {
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

let toPascal = function(input) {
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

let toSnake = function(input) {
  var arr = input.split(" ").join("_");
  return arr;
};

let toKebab = function(input) {
  var arr = input.split(" ").join("-");
  return arr;
};

let toTitle = function(input) {
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

let toVowel = function(input) {
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

let toConsonant = function(input) {
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

let toUpper = function(input) {
  var output = [];
  for (var i = 0; i < input.length; i++) {
    var char = "";
    char = input.charAt(i).toUpperCase();
    output.push(char);
  }
  return output.join("");
};

const makeCase = function(input, style) {
  if (Array.isArray(style)) {
    var newStr = input;
    for (var i = 0; i < style.length; i++) {
      if (style[i] === 'camel') {newStr = toCamelCase(newStr);}
      if (style[i] === 'pascal') {newStr = toPascal(newStr);}
      if (style[i] === 'snake') {newStr = toSnake(newStr);}
      if (style[i] === 'kebab') {newStr = toKebab(newStr);}
      if (style[i] === 'title') {newStr = toTitle(newStr);}
    }
    for (var j = 0; j < style.length; j++) {
      if (style[j] === 'vowel') {newStr = toVowel(newStr);}
      if (style[j] === 'consonant') {newStr = toConsonant(newStr);}
    }
    for (var k = 0; k < style.length; k++) {
      if (style[k] === 'upper') {newStr = toUpper(newStr);}
    }
    return newStr;
  } else {
    if (style === 'camel') {return toCamelCase(input);}
    if (style === 'pascal') {return toPascal(input);}
    if (style === 'snake') {return toSnake(input);}
    if (style === 'kebab') {return toKebab(input);}
    if (style === 'title') {return toTitle(input);}
    if (style === 'vowel') {return toVowel(input);}
    if (style === 'consonant') {return toConsonant(input);}
    if (style === 'upper') {return toUpper(input);}
  }

};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
