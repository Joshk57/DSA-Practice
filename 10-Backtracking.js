// Subsets

var subsets = function(nums) {
    
    let newArr = [[]]

    for (let i = 0; i < nums.length; i++) {
        newArr.push([nums[i]])
        let checkArr = []
        for (let j = i+1; j < nums.lenght; j++) {
            checkArr.push(nums[i], nums[j])
            if (!newArr.includes(checkArr)) {
                newArr.push(checkArr)
            }
        }
    }
    return newArr
};


nums = [1,2,3]
// nums = [0]
console.log(subsets(nums))