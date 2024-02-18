var search = function(nums, target) {
    
    let lo = 0, hi = nums.length-1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo+1)/2);
        if (target < nums[mid]) {
            hi = mid - 1
        } else {
            lo = mid; 
        }
    }
    return nums[lo]==target?lo:-1;
};


// nums = [-1,0,3,5,9,12], target = 9
nums = [-1,0,3,5,9,12], target = 2
console.log(search(nums, target))