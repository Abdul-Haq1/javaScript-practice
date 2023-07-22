
// Reverse a String
// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".
// program to reverse a string

// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// function reverseString(str) {
//   return str.split("").reduce((a,c) =>
//    c+a)
// }

// function reverseString(str) {
//   return str.split("").reverse().join('');
// }

function reverseString(str) {
  return [...str].reverse().join('');
  //return Array.from(str)
}

console.log(reverseString("hello wec"));
