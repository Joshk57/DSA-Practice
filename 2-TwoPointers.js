var isPalindrome = function(s) {
    
    const chars = s.split(" ")


    for (let i = 0; i < chars.length; i++) {
        
    }
};

// s = "A man, a plan, a canal: Panama"
// s = "race a car"
// s = " "
// console.log(isPalindrome(s))


var twoSum = function(numbers, target) {
    

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1]
            }
        }
    }
};

// numbers = [2,7,11,15], target = 9
// numbers = [2,3,4], target = 6
// numbers = [-1,0], target = -1
// console.log(twoSum(numbers, target))


// redo, first problem shows the same three numbers twice
var threeSum = function(nums) {

    let triplets = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if ((nums[i] + nums[j] + nums[k]) === 0) {
                    triplets.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return triplets
}

nums = [-1,0,1,2,-1,-4]
// nums = [0,1,1]
// nums = [0,0,0]
// console.log(threeSum(nums))


// Container with most water

var maxArea = function(height) {
    
    let area = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            if (height[i] >= height[j]) {
                let currArea = height[j] * (j - i)
                if (currArea > area) {
                    area = currArea
                }
            } else {
                let currArea2 = height[i] * (j - i)
                if (currArea2 > area) {
                    area = currArea2
                }
            }
        }
    }
    return area
};

// height = [1,8,6,2,5,4,8,3,7]
height = [1,1]
console.log(maxArea(height))