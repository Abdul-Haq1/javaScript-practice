// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]

function largestOfFour(arr) {
  let newArr = []
  for(let i = 0; i <= arr.length-1; i++){
    //console.log(arr[i]);
    let max = arr[i][0];
    console.log(max) 
    for(let j = 0; j < arr[i].length-1; j++){
      //console.log(arr[i].length)
      if(max < arr[i][j+1]){
        max = arr[i][j+1];
      }
    }
    newArr.push(max)
  }
  return newArr;
}

//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))
