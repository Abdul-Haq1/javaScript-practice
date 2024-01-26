/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let simlarElem = 0
    let newArr= []
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === val){
            simlarElem++
            delete nums[i]
        }
    }
    
    console.log(nums.sort())
    return nums.length - simlarElem
};