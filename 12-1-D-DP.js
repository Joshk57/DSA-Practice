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

console.log(minCostClimbingStairs(cost))