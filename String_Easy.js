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
console.log(defangIPaddr(address))