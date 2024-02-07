/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {

//     for(let j=0; j < nums.length; j++){
//         for(let i=j+1; i < nums.length; i++){
//             if ((nums[i]+ nums[j]) === target){
//                 return [j ,i];
                
//             }
//         }        
//     }
// };

function twoSum(nums, target) {
    let numsWithIndices = nums.map((num, index) => ({ num, index }));

    numsWithIndices.sort((a, b) => a.num - b.num);
    console.log(numsWithIndices)
    // Initialize left and right pointers
    let left = 0;
    let right = nums.length - 1;

    // Iterate until left and right pointers meet
    while (left < right) {
        let currentSum = numsWithIndices[left].num + numsWithIndices[right].num;

        if (currentSum === target) {
            return [numsWithIndices[left].index, numsWithIndices[right].index];
        }
        // If the current sum is less than the target, move the left pointer to the right
        else if (currentSum < target) {
            left++;
        }
        // If the current sum is greater than the target, move the right pointer to the left
        else {
            right--;
        }
    }
    // If no such pair is found, return an empty array
    return [];
}
