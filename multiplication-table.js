const multiplicationTable = function(maxValue) {
  var finalTable = "";
  for (let y = 1; y <= maxValue; y++) {
    var output = "";
    for (let x = 1; x <= maxValue; x++) {
      output = output + " " + x * y;
    }
    finalTable = finalTable + "\n" + output;
  }
  return finalTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));