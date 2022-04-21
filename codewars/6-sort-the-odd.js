function sortArray(array) {
  let odds = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
  return array.map(num => {
    if (num % 2 === 0) {
      return num
    }
    else {
      return odds.shift();
    }
  })
}