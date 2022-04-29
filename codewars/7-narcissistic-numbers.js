/* 
7 kyu Narcissistic Numbers

A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

Test Cases:
isNarcissistic(153)
// return true

isNarcissistic(435)
//return false

isNarcissistic(371)
//returns true

*/

function isNarcissistic(n) {
  let nLength = n.toString().length;
  return n === n.toString().split('').map(num => num ** nLength).reduce((acc, v) => +acc + v, 0)
}