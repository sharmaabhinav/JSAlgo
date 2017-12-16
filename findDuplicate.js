/*
  Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
*/

var findDuplicate = function(nums) {
    var arrayLength = nums.length
    for(var start = 0;start < arrayLength;start++) {
        nums[nums[start] % arrayLength] += arrayLength
    }
    var duplicateNo
    for(start =0;start<arrayLength;start++) {
        if ((Math.floor(nums[start] / arrayLength)) > 1) {
             duplicateNo = start
        }
    }
    // recovery of original array
    for(start =0;start<arrayLength;start++) {
        nums[start] = nums[start] % arrayLength
    }
    return duplicateNo
};