/* 
6 kyu Maximum value in nested arrays

Build a function findNestedMaximum that finds the maximum value in an array containing both numbers and nested arrays. The nested arrays themselves can contain both numbers and further nested arrays. Some of the arrays may be empty but at least one number will be present amongst all the arrays.

For example, findNestedMaximum([4, -3, [10], [[-5, 6], 18]]) should return 18.
*/

function findNestedMaximum(arr) {
  return Number(arr.toString().split(",").sort((a, b) => a - b).pop());
}