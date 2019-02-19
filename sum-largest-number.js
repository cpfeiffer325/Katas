function sumLargestNumbers(data) {
  var newArr = data.sort((a, b) => a - b);
  var sum = newArr[newArr.length-1] + newArr[newArr.length-2];
  return sum;

}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));