/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     let simlarElem = 0
//     let newArr= []
    
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === val){
//             simlarElem++
//             delete nums[i]
//         }
//     }
    
//     console.log(nums.sort())
//     return nums.length - simlarElem
// };

function removeElement(nums, val) {
    let k = 0; // Pointer to track non-val elements

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to val
        // Move it to the position pointed by k
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++; // Increment k to point to the next position
        }
    }

    return k; // k now represents the count of non-val elements
}

// Example usage:
let nums = [3, 2, 2, 3];
let val = 3;
console.log(removeElement(nums, val)); // Output: 2
console.log(nums); // Output: [2, 2, 2, 3] (the first 2 elements are non-val)
