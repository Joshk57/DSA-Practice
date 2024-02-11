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