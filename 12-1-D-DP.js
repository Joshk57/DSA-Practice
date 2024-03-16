// Climbing Stairs

var climbStairs = function(n) {
    
    if (n <= 3 ) return n

    return climbStairs(n - 1) + (n-2)
};

n = 2
n = 3

// console.log(climbStairs(n))
// 2 = 2
// 3 = 3
// 4 = 5

// 1 + 1 + 1 + 1
// 1 + 2 + 1
// 2 + 1 + 1
// 1 + 1 + 2
// 2 + 2

// 5 = 8

// 1 1 1 1 1
// 1 2 1 1
// 1 1 2 1
// 1 1 1 2 
// 2 1 1 1
// 1 2 2
// 2 1 2
// 2 2 1

// 6 = 13

// 1 1 1 1 1 1
// 1 1 1 1 2
// 1 1 1 2 1
// 1 1 2 1 1
// 1 2 1 1 1
// 2 1 1 1 1
// 1 2 2 1
// 1 1 2 2
// 1 2 1 2
// 2 1 1 2
// 2 2 1 1
// 2 1 2 1
// 2 2 2

// Min Cost Climbing Stairs

var minCostClimbingStairs = function(cost) {
    
};

cost = [10,15,20]
// cost = [1,100,1,1,1,100,1,1,100,1]

// console.log(minCostClimbingStairs(cost))




// House Robber

var rob = function(nums) {
    
    let oddSum = 0
    let evenSum = 0

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         let num = nums[i] + nums[j]
    //         if (i - j !== (-1 || 1) && (num > sum)) {
    //             sum = num
    //         }
    //     } 
    // }

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 !== 0) {
            oddSum += nums[i]
        } else {
            evenSum += nums[i]
        }
    }

    if (oddSum >= evenSum) {
        return oddSum
    } else {
        return evenSum
    }

};

nums = [1,2,3,1]
// nums = [2,7,9,3,1]
console.log(rob(nums))