function accum(s) {
  return s.split('').map((l, i) => l.toUpperCase() + l.toLowerCase().repeat(i)).join('-')
}