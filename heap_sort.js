// // Sort the number (1 10 5 8 7 6 4 3 2 9)

let numArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

// Change the data structure into Heap structure
for (let i = 1; i < numArray.length; i++) {
  let c = i;

  do {
    let root = Math.floor((c - 1) / 2);
    if (numArray[root] < numArray[c]) {
      let temp = numArray[root];
      numArray[root] = numArray[c];
      numArray[c] = temp;
    }
    c = root;
  }  while (c != 0);
};

for (let i = numArray.length - 1; i >= 0; i--) {
  let temp = numArray[0];
  numArray[0] = numArray[i];
  numArray[i] = temp;
  let root = 0;
  let c = 1;
  do {
    c = 2 * root + 1;
    // Find the maximum value among children
    if (numArray[c] < numArray[c + 1] && c < i - 1) {
      c++;
    }
    // If child is bigger than root, then switch it
    if (numArray[root] < numArray[c] && c < i) {
      let temp = numArray[root];
      numArray[root] = numArray[c];
      numArray[c] = temp;
    }
    root = c;
  } while (c < i);
};

console.log(numArray);