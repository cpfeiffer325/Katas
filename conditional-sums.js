var conditionalSum = function(values, condition) {
  var sum = 0;
  if (condition === "even") {
    for(var i = 0; i < values.length; i++) {
      if(values[i] % 2 === 0) {
        sum += values[i];
      }
    }
  } else if (condition === "odd") {
    for(var n = 0; n < values.length; n++) {
      if(values[n] % 2 === 1) {
        sum += values[n];
      }
    }
  } else {
    return 0;
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));