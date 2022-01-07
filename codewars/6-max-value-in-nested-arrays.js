

function findNestedMaximum(arr) {
  return Number(arr.toString().split(",").sort((a, b) => a - b).pop());
}