// // Sort the number (1 10 5 8 7 6 4 3 2 9)

let numArray = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

const merge = function(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; //move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; //move right array cursor
    }
  }

  return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

const mergeSort = function(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  // Need a middle value for dividing
  const middle = Math.floor(unsortedArray.length / 2);

  //This is where we will divide the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}

mergeSort(numArray);
console.log(mergeSort(numArray));

// Merge Sort is O(N * logN), and a little bit slower than quick sort. On the other hands, it always gurantee O(N * logN).