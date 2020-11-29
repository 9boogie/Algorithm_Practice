// Sort the number (1 10 5 8 7 6 4 3 2 9)

let numArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
let min;
let index;
let temp;

for (let i = 0; i < numArray.length; i++) {
  min = 9999;
  for (let j = i; j < numArray.length; j++) {
    if (min > numArray[j]) {
      min = numArray[j];
      index = j;
    }
  }
  temp = numArray[i];
  numArray[i] = numArray[index];
  numArray[index] = temp;
};
console.log(numArray);