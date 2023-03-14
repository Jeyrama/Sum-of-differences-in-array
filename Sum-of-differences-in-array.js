/*
Your task is to sum the differences between 
consecutive pairs in the array in descending order.

If the array is empty or the array has only 
one element the result should be 0.

Example:  [2, 1, 10] --> 9
*/


// Solution 

function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// or

const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);