// Sort the number which is less than 5
const numArray = [
  1, 3, 2, 4, 3, 2, 5, 3, 1, 2, 
  3, 4, 4, 3, 5, 1, 2, 3, 5, 2,
  3, 1, 4, 3, 5, 1, 2, 1, 1, 1
  ];

let temp;
let count = [];

for (let i = 0; i < 6; i++) {
  count[i] = 0;
}
console.log(count);
for (let i = 0; i < numArray.length; i++) {
  count[numArray[i]]++;
}
console.log(count);
for (let i = 1; i <= 6; i++) {
  if (count[i] != 0) {
    for (let j = 0; j < count[i]; j++) {
      console.log(i);
    }
  }
}

// Counting Sort is O(N), so it is the fastest way of sorting, but it can be used on limited situation.