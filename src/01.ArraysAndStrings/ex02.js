
// Ex02
// Write code to reverse a String

function reverse (str) {

  let reverse_str = [];

  for (let i = str.length; i > -1; i--) {
    reverse_str.push(str[i])
  }
  return console.log(reverse_str.join(''))
}
