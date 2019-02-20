function instructorWithLongestName(instructors) {
var nameLength = [];

for (var i = 0; i < instructors.length; i++) {
  nameLength.push(instructors[i]['name'].length)
  }
  return (instructors[nameLength.indexOf(Math.max(...nameLength))]);
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));