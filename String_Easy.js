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
console.log(numJewelsInStones(jewels, stones))