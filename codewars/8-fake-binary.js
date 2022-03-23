function fakeBin(x) {
  return x.split('').map(num => Number(num) < 5 ? '0' : '1').join('')
}