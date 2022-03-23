/* 
8 kyu Is it a palindrome?

Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
    let backwardsX = '';
    for (i = x.length - 1; i >= 0; i--) {
        backwardsX += x[i];
    }
    return x.toLowerCase() === backwardsX.toLowerCase() ? true : false;
}