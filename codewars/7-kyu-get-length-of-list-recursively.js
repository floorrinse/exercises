/* 
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