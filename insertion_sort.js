// Sort the number (1 10 5 8 7 6 4 3 2 9)

let numArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];
let temp;

for (let i = 0; i < numArray.length - 1; i++) {
  j = i;
  while (numArray[j] > numArray[j + 1]) {
    temp = numArray[j];
    numArray[j] = numArray[j + 1];
    numArray[j + 1] = temp;
    j--;
  }
};

console.log(numArray);

// Insertion Sort is also O(N^2), but it is fasterst sorting way among O(N^2) ways.