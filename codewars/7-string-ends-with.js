/* 
7 kyu String ends with?
*/

function solution(str, ending) {
  return str.slice(-ending.length) === ending || ending === '' ? true : false;
}