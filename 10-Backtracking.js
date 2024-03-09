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

//Combination Sum

var combinationSum = function(candidates, target) {
    let res = [];

    const dfs = (curCandidates, curTarget, value) => {
        if( curTarget == 0)  res.push(value);
        if(curTarget <= 0 ) return;
        for(let g=0; g<curCandidates.length; g++){
            dfs(curCandidates.slice(g), curTarget-curCandidates[g], [...value, curCandidates[g] ] );  
        }
    }
    dfs(candidates, target, []);
    return res;
};

candidates = [2,3,6,7], target = 7
// candidates = [2,3,5], target = 8
// candidates = [2], target = 1
console.log(combinationSum(candidates, target))