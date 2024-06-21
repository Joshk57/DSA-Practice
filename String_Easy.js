// 3110. Score of a String


// var scoreOfString = function(s) {
//     const alphabet = "abcdefhijklmnopqrstuvwxyz".split("")
    
//     let sum = (100 + alphabet.indexOf(s[0]))

//     for (let i = 0; i < s.length; i++) {
//         if (alphabet.includes(s[i])) {
//             sum += (100 + )
//         }
//     }
// };

// s = "hello"
// s = "zaz"
// console.log(scoreOfString(s))



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
// console.log(countMatches(items, ruleKey, ruleValue))


// 1816	Truncate Sentence

var truncateSentence = function(s, k) {
    
    let words = s.split(" ")
    let sent = []
    let count = 0
    for (let i = 0; i <= words.length; i++) {
        if (k === count) {
            return sent.join(" ")
        } else {
            sent.push(words[i])
            count++
        }
    }
};

s = "Hello how are you Contestant", k = 4
// s = "What is the solution to this problem", k = 4
// s = "chopper is not a tanuki", k = 5
// console.log(truncateSentence(s, k))



// 1528	Shuffle String

var restoreString = function(s, indices) {
    let arr = new Array(indices);
    s = s.split("");
    for (let i = 0; i < s.length; i++) {
        arr[indices[i]] = s[i];
    }
    return arr.join("");

};


s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// s = "abc", indices = [0,1,2]
// console.log(restoreString(s, indices))



// 709. To Lower Case

var toLowerCase = function(s) {
    let ans = '';

    for(const char of s){
        const curr = char.charCodeAt(0) - 65;
        if(curr >= 0 && curr <= 25){
            ans+= String.fromCharCode(97+curr);
        }else{
            ans+=char;
        }
    }

    return ans;

    
};

// s = "Hello"
// s = "here"
// s = "LOVELY"
// console.log(toLowerCase(s))



// 2810. Faulty Keyboard

var finalString = function(s) {
    
    let str = ""

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
            str = str.split("").reverse().join("")
        } else {
            str += s[i]
        }
    }
    return str
};

s = "string"
// s = "poiinter"
// console.log(finalString(s))


// 1528. Shuffle String

var restoreString = function(s, indices) {
    let arr = new Array(indices);
s = s.split("");
for (let i = 0; i < s.length; i++) {
    arr[indices[i]] = s[i];
}
return arr.join("");
};

s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// s = "abc", indices = [0,1,2]
// console.log(restoreString(s, indices))



// 2325. Decode the Message

var decodeMessage = function(key, message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let hash = {}
    let str = ""
    for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (key[i] === " ") {
                continue
            } else if (!hash[key[i]]) {
                hash[key[i]] = alphabet[i]
            }
        }
    }

    for (let i = 0; i < message.length; i++) {
        if (hash[message[i]]) {
            str += hash[message[i]]
        } else {
            str += message[i]
        }
    }
    console.log(hash)
    return str
};


key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
// key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
// console.log(decodeMessage(key, message))


// 2108. Find First Palindromic String in the Array

var firstPalindrome = function(words) {
    
    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            return words[i]
        }
    }
    return ""
};

function isPalindrome(str) {
    return str === str.split("").reverse().join("")
}

// words = ["abc","car","ada","racecar","cool"]
words = ["notapalindrome","racecar"]
// words = ["def","ghi"]
console.log(firstPalindrome(words))




// 2194. Cells in a Range on an Excel Sheet

var cellsInRange = function(s) {
    let cells = s.split(":")

    for (let i = cells.length - 1 ; i >= 0; i--) {
        let maxNum = cells[0]
        
    }
    
    return cells
};

s = "K1:L2"
// s = "A1:F1"
// console.log(cellsInRange(s))

// 2000. Reverse Prefix of Word

var reversePrefix = function(word, ch) {
    let n = word.length;

    //create a list to store the characters before the CHARACTER(ch)
    let pre = [];
    // suf will store the remaining suffix if there is any 
    let suf = "";
    for(let i=0; i<n; i++) {
        pre.push(word[i]);

        // check if the current character is the character wanted
        if(word[i] == ch) {
            // if so then put the remaining character to suf and break the loop
            suf = word.substr(i+1, n-1);
            break;
        }
        // if the wanted character is not found, then just leave the pre empty in case it is easy to check
        if(i+1 == n) pre = [];
    }
    //return `word` itself if pre is empty which means the wanted character is not found or return the result in which prefix is reversed and suffix is added
    return pre.length == 0 ? word : pre.reverse().join('') + suf;
};

word = "abcdefd", ch = "d"
// word = "xyxzxe", ch = "z"
// word = "abcd", ch = "z"
// console.log(reversePrefix(word, ch))




// 1684. Count the Number of Consistent Strings
var countConsistentStrings = function(allowed, words) {
    const hashmap = new Map();
    let output = 0;

    for (let i = 0; i < allowed.length; i++) {
        hashmap.set(allowed[i], 1);
    }

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        output++;
        for (let j = 0; j < word.length; j++) {
            if (!hashmap.has(word[j])) {
                output--;
                break;
            }
        }
    }

    return output;
};

allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]

// console.log(countConsistentStrings(allowed, words))


// 2309. Greatest English Letter in Upper and Lower Case

var greatestLetter = function(s) {
    let set=new Set(s.split(""));
	// ASCII(A-Z, a-z)=(65-90, 97-122).
    for(let i=90; i>=65; i--){
        if(set.has(String.fromCharCode(i)) && set.has(String.fromCharCode(i+32))){
            return String.fromCharCode(i);
        }
    }
    return "";    
};

s = "lEeTcOdE"
// s = "arRAzFif"
// s = "AbCdEfGhIjK"
console.log(greatestLetter(s))