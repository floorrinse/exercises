/* 
7 kyu Simple Moon Rating
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