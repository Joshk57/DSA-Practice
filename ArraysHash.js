// 1. Contains Duplicates

var containsDuplicate = function(nums) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            return true
        }
    }
    return false
};



// nums = [1,2,3,1]
// nums = [1,2,3,4]
// nums = [1,1,1,3,3,4,3,2,4,2]
// console.log(containsDuplicate(nums))