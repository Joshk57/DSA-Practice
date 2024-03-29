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
console.log(kidsWithCandies(candies, extraCandies))