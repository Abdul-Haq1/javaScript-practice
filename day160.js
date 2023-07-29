// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// function chunkArrayInGroups(arr, size) {
//   let temp = [];
//   const result = [];

//   for (let a = 0; a < arr.length; a++) {
//     if (a % size !== size - 1) temp.push(arr[a]);
//     else {
//       temp.push(arr[a]);
//       result.push(temp);
//       temp = [];
//     }
//   }

//   if (temp.length !== 0) result.push(temp);
//   return result;
// }

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }
//   return newArr;
// }

function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

chunkArrayInGroups(["a", "b", "c", "d"], 2);
