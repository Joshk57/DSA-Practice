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
accounts = [[2,8,7],[7,1,3],[1,9,5]]
console.log(maximumWealth(accounts))