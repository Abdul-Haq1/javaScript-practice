// Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: 
// multiply the first n elements of an array to create the product of those elements. Using a for loop

//BY USING RECURSION

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

//BY USING LOOP

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
