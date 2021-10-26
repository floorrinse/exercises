/*
7 kyu Sum ALL the arrays!

You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/

function arraySum(arr) {
  return arr.toString().split(',').filter(Number).reduce((prev, current) => +prev + +current, 0)
}