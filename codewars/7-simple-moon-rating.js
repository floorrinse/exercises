/* 
7 kyu Simple Moon Rating

When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

Write a function which returns valid rating represented as moons ('o','c','x') in single string.
You are given the following values preloaded (remember, since I can't use unicode characters, moons in brackets are here just to improve your imagination):

const fullMoon = 'o'
const halfMoon = 'c'
const newMoon = 'x'

Input: 1
Expected output: 'cxxxx'

Input: 7.2
Expected output: 'ooocx'

Input: 5.9
Expected output: 'oooxx'
*/

function moonRating(rating) {
  let moons = (rating % 1) < 0.5 ? Math.floor(rating) / 2 : Math.ceil(rating) / 2;

  if (moons % 1 === 0) {
    return 'o'.repeat(moons) + 'x'.repeat(5 - moons);
  }
  else {
    let wholeMoons = Math.floor(moons);
    return 'o'.repeat(wholeMoons) + 'c'.repeat(1) + 'x'.repeat(4 - wholeMoons);
  }
}