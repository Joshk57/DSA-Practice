// 2160. Minimum Sum of Four Digit Number After Splitting Digits

var minimumSum = function(num) {
    const arr = num.toString().split('').sort()
    return parseInt(arr[0] + arr[2]) + parseInt(arr[1] + arr[3])
};

num = 2932
// num = 4009
console.log(minimumSum(num))