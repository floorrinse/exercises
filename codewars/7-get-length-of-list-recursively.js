/* 
7 kyu Get length of the list recursively

Write funcion lenR which returns the length of a given list. Try no to cheat and provide recursive solution.
*/

function lenR(x) {
  let count = 0;
  if (x.length === 0) {
    return count;
  }
  else {
    count++;
    return count + lenR(x.slice(1));
  }
}