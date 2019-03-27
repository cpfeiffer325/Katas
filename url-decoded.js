const urlDecode = function(text) {
  text = text.split("%20").join(" ").split("&");
  var output = {};

  for(var i = 0; i < text.length; i++) {
    var n = "";
    n = text[i].split("=");
    output[n[0]] = n[1];

  }
  return output;
};

//%20 represents a space character.
//Key-value pairs are represented using an = character: key=value
//Multiple key-value pairs are separated using a & character: key1=value1&key2=value2


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

//{duck: "rubber"}
//{bootcamp: "Lighthouse Labs"}
//{city: "Vancouver", weather: "lots of rain"}
//"lots of rain"