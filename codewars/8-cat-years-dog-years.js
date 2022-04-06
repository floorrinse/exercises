var humanYearsCatYearsDogYears = function (humanYears) {
  //1. create formula for calculating dog and cat years. first two years can be same but diverges 3rd year +
  let dogYears = 15 + 9 + ((humanYears - 2) * 5);
  let catYears = 15 + 9 + ((humanYears - 2) * 4);
  if (humanYears === 1) {
    return [1, 15, 15];
  }
  else if (humanYears === 2) {
    return [2, 24, 24]
  }
  else if (humanYears > 2) {
    return [humanYears, catYears, dogYears]
  }
}