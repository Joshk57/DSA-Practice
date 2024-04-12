// 1108 Defanging an IP Address


var defangIPaddr = function(address) {
    
    let newAddress = ""
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            newAddress += "[.]"
        } else {
            newAddress += address[i]
        }
    }
    return newAddress
};

address = "1.1.1.1"
// address = "255.100.50.0"
// console.log(defangIPaddr(address))


// 771 Jewels and Stones

var numJewelsInStones = function(jewels, stones) {
    
    let count = 0

    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (stones[i] === jewels[j]) {
                count++
            }
        }
    }
    return count
};

// jewels = "aA", stones = "aAAbbbb"
jewels = "z", stones = "ZZ"
// console.log(numJewelsInStones(jewels, stones))



// 1678 Goal Parser Interpretation

var interpret = function(command) {
    
    let newCommand = ""

    for (let i = 0; i < command.length; i++) {
        if (command[i] === "G") {
            newCommand += "G"
        } else if (command[i] === "(" && command[i+1] === ")") {
            newCommand += "o"
        } else if (command[i] === "(" && command[i+1] === "a") {
            newCommand += "al"
        }
    }

    return newCommand
};

command = "G()(al)"
// command = "G()()()()(al)"
// command = "(al)G(al)()()G"
// console.log(interpret(command))



// 2114 Maximum Number of Words Found in Sentences

var mostWordsFound = function(sentences) {
    
    let maxCount = 0


    for (let sentence of sentences) {
        let words = sentence.split(" "); // Split sentence into words
        let count = words.length; // Count the number of words

        if (count > maxCount) {
            maxCount = count; // Update maxCount if necessary
        }
    }
    return maxCount
};

sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// sentences = ["please wait", "continue to fight", "continue to win"]
// console.log(mostWordsFound(sentences))




// 1221. Split a String in Balanced Strings

var balancedStringSplit = function(s) {
    
    let lcount = 0
    let rcount = 0
    let total = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") {
            rcount++
        } else if (s[i] === "L") {
            lcount++
        }

        if (lcount === rcount) {
            total++
            lcount = 0
            rcount = 0
        }
    }
    return total
};

// s = "RLRRLLRLRL"
// s = "RLRRRLLRLL"
s = "LLLLRRRR"
// console.log(balancedStringSplit(s))



// 1662 Check If Two String Arrays are Equivalent

var arrayStringsAreEqual = function(word1, word2) {
    let str1 = ""
    let str2 = ""

    for (let i = 0; i < word1.length; i++) {
        let char = word1[i].split("")

        for (let i = 0; i < char.length; i++) {
            str1 += char[i]

        }
    }
    
    for (let i = 0; i < word2.length; i++) {
        let char2 = word2[i].split("")

        for (let i = 0; i < char2.length; i++) {
            str2 += char2[i]
            
        }
    }

    return str1 === str2
};


// word1 = ["ab", "c"], word2 = ["a", "bc"]
// word1 = ["a", "cb"], word2 = ["ab", "c"]
word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// console.log(arrayStringsAreEqual(word1, word2))



// 1773 Count Items Matching a Rule

var countMatches = function(items, ruleKey, ruleValue) {

    let count = 0

    for(let arr of items){
        const [phone, color, name] = arr
        if(ruleKey === "type" && ruleValue === phone || ruleKey === "color" 
         && ruleValue === color || ruleKey === 'name' && ruleValue === name) 
         
         count ++
    }
    return count
};


items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
console.log(countMatches(items, ruleKey, ruleValue))