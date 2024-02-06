/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length;
    let zeroCount = 0;
  
    // Count the number of zeros
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        }
    }
  
    // Remove zeros and append them at the end
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            len--; // Adjust length after removing an element
        }
    }
};