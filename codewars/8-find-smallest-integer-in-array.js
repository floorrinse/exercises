/* 
8 kyu Find the smallest integer in teh array
*/


class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b).shift();
  }
}