/**
 * @param {number[]} nums
 * @return {number}
 */
// function removeDuplicates(nums) {
//   if (nums.length === 0) {
//     return 0;
//   }

//   let uniqueCount = 1; // At least the first element is unique

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       // Found a unique element
//       nums[uniqueCount] = nums[i];
//       uniqueCount++;
//     }
//   }

//   return uniqueCount;
// };

// By using set datastructure

function removeDuplicates(nums) {
    let uniqueSet = new Set();
    for (let num of nums) {
        uniqueSet.add(num);
    }
    let uniqueArray = Array.from(uniqueSet);
    for (let i = 0; i < uniqueArray.length; i++) {
        nums[i] = uniqueArray[i];
    }
    return uniqueArray.length;
}
