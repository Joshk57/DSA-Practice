// 1637 Widest Vertical Area Between Two Points Containing No Points


var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b)=>(a[0]-b[0]))
    max = 0
    for ( let i = 0; i < points.length -1; i++){
        if (points[i+1][0]-points[i][0]>max) {
            max = points[i+1][0]-points[i][0]
        }
    }
    return max
};

points = [[8,7],[9,9],[7,4],[9,7]]
// points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
// console.log(maxWidthOfVerticalArea(points))


// 1672 Richest Customer Wealth

var maximumWealth = function(accounts) {
    
    let maxWealth = 0
    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = 0
        for (let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j]
        }
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth
        }
    }
    return maxWealth
};

// accounts = [[1,2,3],[3,2,1]]
// accounts = [[1,5],[7,3],[3,5]]
// accounts = [[2,8,7],[7,1,3],[1,9,5]]
// console.log(maximumWealth(accounts))



// 2798 Number of employees who met the target

var numberOfEmployeesWhoMetTarget = function(hours, target) {
    
    let count = 0
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            count++
        }
    }
    return count
};

hours = [0,1,2,3,4], target = 2
// hours = [5,1,4,2,2], target = 6
// console.log(numberOfEmployeesWhoMetTarget(hours, target))


// 1431 Kids with the greatest number of candies

var kidsWithCandies = function(candies, extraCandies) {
    const maxAmt = Math.max(...candies)
    const newArr = []
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxAmt) {
            newArr.push(true)
        } else {
            newArr.push(false)
        }
    }
    return newArr
};
candies = [2,3,5,1,3], extraCandies = 3
// candies = [4,2,1,1,2], extraCandies = 1
// candies = [12,1,12], extraCandies = 10
// console.log(kidsWithCandies(candies, extraCandies))


// 2824 Count Pairs Whose Sum is Less than Target

var countPairs = function(nums, target) {
    
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((i >= 0) && (j > i) && (nums[i] + nums[j] < target)) {
                count++
            }
        }
    }
    return count
};

// nums = [-1,1,2,3,1], target = 2
nums = [-6,2,5,-2,-7,-1,3], target = -2
// console.log(countPairs(nums, target))


//1365 How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function(nums) {
    
    let arr = []
    
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] > nums[j]) {
                count++
            }

            
        }
        arr.push(count)
        count = 0
    }
    return arr
};

nums = [8,1,2,2,3]
// nums = [6,5,4,8]
// nums = [7,7,7,7]
// console.log(smallerNumbersThanCurrent(nums))


// 1480 Running Sum of 1d Array

var runningSum = function(nums) {
    
    let arr = [nums[0]]
    let sum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        sum += nums[i]
        arr.push(sum)
    }

    return arr
};


nums = [1,2,3,4]
// nums = [1,1,1,1,1]
// nums = [3,1,2,10,1]
// console.log(runningSum(nums))



// 2859. Sum of Values at Indices With K Set Bits

var sumIndicesWithKSetBits = function(nums, k) {
    
};

nums = [5,10,1,5,2], k = 1
// nums = [4,3,2,1], k = 2
// console.log(sumIndicesWithKSetBits(nums, k))



// 1720. Decode XORed Array

var decode = function(encoded, first) {
    
};

encoded = [1,2,3], first = 1
// encoded = [6,2,7,3], first = 4
// console.log(decode(encoded, first))


// 2574. Left and Right Sum Differences

var leftRightDifference = function(nums) {
    
    // finding left sum
    let leftsum=[];
    for(let i=0;i<nums.length;i++){
        let sum=0;
        for(let j=0;j<i;j++){
            sum+=nums[j]
        }
        leftsum.push(sum)
    }
    // finding right sum
    let rightsum=[];
    for(let i=0;i<nums.length;i++){
        let sum=0;
        for(let j=i+1;j<nums.length;j++){
            sum+=nums[j]
        }
        rightsum.push(sum)
    }
    // finding the modulas of sum by Math.abs operator
    let result=[]
    for(let i=0;i<leftsum.length;i++){
        result.push(Math.abs(leftsum[i]-rightsum[i]))
    }
    return result
};

nums = [10,4,8,3]
// nums = [1]
// console.log(leftRightDifference(nums))




// 1588. Sum of All Odd Length Subarrays

var sumOddLengthSubarrays = function(arr) {
    
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        
    }
};


arr = [1,4,2,5,3]
// arr = [1,2]
// console.log(sumOddLengthSubarrays(arr))


// 2574. Left and Right Sum Differences

var leftRightDifference = function(nums) {
        // finding left sum
        let leftsum=[];
        for(let i=0;i<nums.length;i++){
            let sum=0;
            for(let j=0;j<i;j++){
                sum+=nums[j]
            }
            leftsum.push(sum)
        }
        // finding right sum
        let rightsum=[];
        for(let i=0;i<nums.length;i++){
            let sum=0;
            for(let j=i+1;j<nums.length;j++){
                sum+=nums[j]
            }
            rightsum.push(sum)
        }
        // finding the modulas of sum by Math.abs operator
        let result=[]
        for(let i=0;i<leftsum.length;i++){
            result.push(Math.abs(leftsum[i]-rightsum[i]))
        }
        return result
};

nums = [10,4,8,3]
// nums = [1]
// console.log(leftRightDifference(nums))


//2373. Largest Local Values in a Matrix
var largestLocal = function(grid) {
    const n = grid.length;
    const res = [];

    for (let i = 1; i < n - 1; ++i) {
        const tempRow = [];
        for (let j = 1; j < n - 1; ++j) {
            let temp = 0;

            for (let k = i - 1; k <= i + 1; ++k) {
                for (let l = j - 1; l <= j + 1; ++l) {
                    temp = Math.max(temp, grid[k][l]);
                }
            }

            tempRow.push(temp);
        }
        res.push(tempRow);
    }

    return res;
};

grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
// grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
console.log(largestLocal(grid))



//3065. Minimum Operations to Exceed Threshold Value I

var minOperations = function(nums, k) {
    
};

nums = [2,11,10,1,3], k = 10
// nums = [1,1,2,4,9], k = 1
// nums = [1,1,2,4,9], k = 9
console.log(minOperations(nums, k))