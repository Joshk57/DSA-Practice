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
console.log(interpret(command))