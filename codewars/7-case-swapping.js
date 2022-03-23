function swap(str){
//1. create an empty str var
//1. do a loop in str
//2. if each i is toLowerCase, change toUpperCase
//  else, change toLowerCase()
//3. push to empty str var
  let updatedStr = '';

  for (i=0;i<str.length;i++) {
    if (str[i] === str[i].toLowerCase()) {
      updatedStr += str[i].toUpperCase();
    }
    else updatedStr += str[i].toLowerCase();
  }
  return updatedStr;
}