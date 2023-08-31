// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let sum = 0,i;
  let start;
  let end;
  if (arr[0] < arr[1]){
    start = arr[0];
    end = arr[1];
  }else {
    start = arr[1];
    end = arr[0];
  }
  for(i = start; i <= end; i++){
    console.log(i)
    sum += arr[i];
  }
  return sum;
}

console.log(sumAll([1, 4]));
