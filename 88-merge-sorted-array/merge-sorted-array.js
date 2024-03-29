/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let j = 0;
    for (let i = 0; i < nums1.length && j < nums2.length; i++) {
        if (nums1[i] === 0) {
            nums1[i] = nums2[j];
            j++;
        }
    }

    nums1.sort((a, b)=>a-b)
    return nums1
};