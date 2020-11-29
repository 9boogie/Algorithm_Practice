// Sort the number (1 10 5 8 7 6 4 3 2 9)

let numArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

for (let i = 0; i < numArray.length; i++) {
  for (let j = 0; j < numArray.length - 1; j++) {
    if (numArray[j] > numArray[j + 1]) {
      const temp = numArray[j];
      numArray[j] = numArray[j + 1];
      numArray[j + 1] = temp;
    }
  }
};

console.log(numArray);

// Bubble Sort using O(N^2), but it is slower than selection sort because it keeps change the location of number. 
// It is the slowest way of sorting.