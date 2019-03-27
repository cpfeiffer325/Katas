let talkingCalendar = function(date) {
  var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  var arr = date.split("/");
  var d = parseInt(arr[2]);
  var day = d + (d % 10 === 1 && d !== 11 ? 'st' : d % 10 === 2 && d !== 12 ? 'nd' : d % 10 === 3 && d !== 13 ? 'rd' : 'th');
  var monthNum = parseInt(arr[1]);
  var monthText = months[monthNum - 1];
  var year = parseInt(arr[0]);

  return monthText + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));