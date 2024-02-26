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
// nums = [-1,0,3,5,9,12], target = 2
// console.log(search(nums, target))


// Search a 2D Matrix

var searchMatrix = function(matrix, target) {
    

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true
            }
        }
    }
    return false
};


// matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// console.log(searchMatrix(matrix, target))