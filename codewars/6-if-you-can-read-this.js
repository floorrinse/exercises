function to_nato(words) {
  return words.split('').filter(word => word !== ' ').map(letter => NATO[letter.toLowerCase()] || letter).join(' ');
}