// 1. Contains Duplicates

var containsDuplicate = function(nums) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            return true
        }
    }
    return false
};



// nums = [1,2,3,1]
// nums = [1,2,3,4]
// nums = [1,1,1,3,3,4,3,2,4,2]
// console.log(containsDuplicate(nums))

// 2. Valid Anagram

var isAnagram = function(s, t) {


    // return s.split('').sort().join('') === t.split('').sort().join('')

    const hash1 = {}
    const hash2 = {}

    // const firstWord = s.split("")
    // const secondWord = t.split("")

    for (let i = 0; i < s.length; i++) {
        if (!hash1[s[i]]) {
            hash1[s[i]] = 1
        } else {
            hash1[s[i]] += 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!hash2[t[i]]) {
            hash2[t[i]] = 1
        } else {
            hash2[t[i]] += 1
        }
    }
    // console.log(hash1)
    // console.log(hash2)
    // return hash1 === hash2
};


// s = "anagram", t = "nagaram"
// s = "rat", t = "car"
// console.log(isAnagram(s, t))

// 3. Two Sum

var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// nums = [2,7,11,15], target = 9
// nums = [3,2,4], target = 6
// nums = [3,3], target = 6
// console.log(twoSum(nums, target))

var groupAnagrams = function(strs) {
    let newArr = []


    for (let i = 0; i < strs.length; i++) {
        let arrTwo = [strs[i]]
        // console.log(strs[i])
        for (let j = i+ 1; j < strs.length-1; j++) {
            // console.log(strs[j])
            if (anagramHelper(strs[i], strs[j])) {
                arrTwo.push(strs[j])
            }
        }
        newArr.push(arrTwo)
    }
    return newArr
};

const anagramHelper = function(str1, str2) {
    str1.split("").reverse().join("") === str2.split("").reverse().join("")
}

strs = ["eat","tea","tan","ate","nat","bat"]
// strs = [""]
// strs = ["a"]
// console.log(groupAnagrams(strs))






// Top K Frequent Elements

var topKFrequent = function(nums, k) {
    
    const freqNums = {}

    for (let i = 0; i < nums.length; i++) {
        if (!freqNums[nums[i]]) {
            freqNums[nums[i]] = 1
        } else {
            freqNums[nums[i]] += 1
        }
    }
    
    
};

nums = [7,7,7,7,7,1,1,1,2,2,3], k = 2
// nums = [1], k = 1
console.log(topKFrequent(nums, k))