let repeatNumbers = function(data) {
  var final = "";
  for (var i = 0; i < data.length; i++) {
    var line = "";
    var a = data[i][0];
    var b = data[i][1];
    for (var n = 0; n < b; n++) {
      line += a;
    }
    if (i < data.length-1) {
    final += line.concat(", ");
    } else {
      final += line;
    }
  }
  return final;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));