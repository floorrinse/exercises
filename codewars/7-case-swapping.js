// Given a string, swap the case for each of the letters.

// e.g.CodEwArs-- > cODeWaRS

// Examples
// "" -> ""
// "CodeWars" -> "cODEwARS"
// "abc" -> "ABC"
// "ABC" -> "abc"
// "123235" -> "123235"

function swap(str){
  let updatedStr = '';

  for (i=0;i<str.length;i++) {
    if (str[i] === str[i].toLowerCase()) {
      updatedStr += str[i].toUpperCase();
    }
    else updatedStr += str[i].toLowerCase();
  }
  return updatedStr;
}