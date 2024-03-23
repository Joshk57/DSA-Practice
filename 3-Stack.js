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
// console.log(isValid(s))


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




// Evaluate Reverse Polish Notation

var evalRPN = function(tokens) {
    
};

tokens = ["2","1","+","3","*"]
// tokens = ["4","13","5","/","+"]
// tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// console.log(evalRPN(tokens))


// Generate Paranthesis

var generateParenthesis = function(n) {
    if (n === 1) {
        return ["()"]
    }


};

n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

n = 1
// Output: ["()"]

// console.log(generateParenthesis(n))


//Daily Temperatures

var dailyTemperatures = function(temperatures) {
    
    let temps = []
    for (let i = 0; i < temperatures.length; i++) {
        let count = 0
        if (temperatures[i] < temperatures[i+1]) {
            count++
            temps.push(count)
            count = 0
        } else {
            count++
 
        }
    }
    return temps
};

temperatures = [73,74,75,71,69,72,76,73]
// temperatures = [30,40,50,60]
// temperatures = [30,60,90]
// console.log(dailyTemperatures(temperatures))


// Car Fleet

var carFleet = function(target, position, speed) {
    
};

target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
// target = 10, position = [3], speed = [3]
// target = 100, position = [0,2,4], speed = [4,2,1]
console.log(carFleet(target, position, speed))