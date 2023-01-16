console.log("loading sorting.js");

var testArray = [
  ["John", 10],
  ["Gerge Bush", 15],
  ["Vasja Pupkin", 6],
  ["Obama Bama", 9],
];
console.log("unsorted data:");
console.log(testArray);

console.log("sorting");

testArray.sort((firstItem, secondItem) => firstItem[1] - secondItem[1]);

console.log(testArray);