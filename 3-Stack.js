var isValid = function(s) {

    const chars = s.split("")
    console.log(chars)
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === "(") {
            chars.shift()
            
        }

    }
    return true
}

s = "()"
// s = "()[]{}"
// s = "(]"
console.log(isValid(s))


var MinStack = function() {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */