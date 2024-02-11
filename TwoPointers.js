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

numbers = [2,7,11,15], target = 9
numbers = [2,3,4], target = 6
numbers = [-1,0], target = -1
console.log(twoSum(numbers, target))