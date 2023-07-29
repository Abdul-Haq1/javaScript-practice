// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] >= num) return i;
  // }

  // return arr.length;/

  //return arr.filter(val => num > val).length;

  //  let index = arr
  //   .sort((curr, next) => curr - next)
  //   .findIndex(currNum => num <= currNum);
  //   // Returns index or total length of arr
  //   return index === -1 ? arr.length : index;

    return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
