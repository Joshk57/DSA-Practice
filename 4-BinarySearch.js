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


// Koko Eating Bananas

var minEatingSpeed = function(piles, h) {
    let lo = 1, hi = Math.max(...piles), k = -1;
    
    while (lo <= hi) {
        const mid = lo + ((hi - lo) >> 1);
        const numOfHours = piles.reduce((total, pile) => total + Math.ceil(pile / mid), 0);
        
        if (numOfHours <= h) {
            k = mid;
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
    }
    
    return k;
};

piles = [3,6,7,11], h = 8
// piles = [30,11,23,4,20], h = 5
// piles = [30,11,23,4,20], h = 6

console.log(minEatingSpeed(piles, h))