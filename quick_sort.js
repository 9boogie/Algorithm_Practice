// Sort the number (1 10 5 8 7 6 4 3 2 9)

let numArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

const quickSort = function(data, start, end) {
  if (start >= end) { // it means there is only one element
    return data;
  }

  let key = start; // Key is first element, in other word, it is pivot number
  let i = start + 1;
  let j = end;
  let temp;

  while (i <= j) { // Repeat until i & j are crossed
    while (data[i] <= data[key]) { // Until meet value which is bigger than key
      i++;
    }
    while (data[j] >= data[key] && j > start) { // Until meet value which is smaller than key
      j--;
    }

    if (i > j) { // If crossing happens, then switch the key value
      temp = data[j];
      data[j] = data[key];
      data[key] = temp;
    } else {
      temp = data[j];
      data[j] = data[i];
      data[i] = temp;
    }
  }
  quickSort(data, start, j - 1);
  quickSort(data, j + 1, end);
}

quickSort(numArray, 0, numArray.length - 1);

console.log(numArray);

// Quick Sort is also O(N * logN), but some situation, it causes O(N^2).