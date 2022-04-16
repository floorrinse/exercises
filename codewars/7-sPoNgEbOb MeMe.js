/* 
7 kyu sPoNgEbOb MeMe
*/

function spongeMeme(sentence) {
  return sentence.toLowerCase().split('').map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter).join('');
}