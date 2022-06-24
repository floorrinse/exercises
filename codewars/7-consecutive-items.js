function consecutive(arr, a, b) {
  const indexOfA = arr.indexOf(a);
  const indexOfB = arr.indexOf(b);
  return Math.abs(indexOfA - indexOfB) === 1;
}