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
console.log(maxWidthOfVerticalArea(points))