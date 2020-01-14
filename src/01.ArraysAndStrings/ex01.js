
// Ex01
// Implement an algorithm to determine if a string has all unique characters.
// What if you can not use additional data structures?

export function uniqueCharacters(string) {

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      if(string[i] === string[j+1]) {
        return true;
      }
    }
  }
  return false;
}
