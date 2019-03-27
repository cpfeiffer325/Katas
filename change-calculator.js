let calculateChange = function(total, cash) {
  var billValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  var billText = ["twenty", "ten", "five", "twoDollar", "dollar", "quarter", "dime", "nickle", "penny"];
  var totalChange = {};
  var change = cash - total;

  for (var i = 0; i < billValues.length; i++) {
    var n = "";
    if (change > billValues[i] && change > 0) {
      n = Math.floor(change / billValues[i]);
      change = change % billValues[i];

      if (n > 0) {
        totalChange[billText[i]] = n;
      }
    }
  }
  return totalChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));