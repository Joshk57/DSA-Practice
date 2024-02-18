// Reverse Linked List

var reverseList = function(head) {
    let newArr = []

    for (let i = head.length - 1; i >= 0; i--) {
        newArr.push(head[i])
    }
    return newArr
};


// head = [1,2,3,4,5]
// head = [1,2]
head = []
console.log(reverseList(head))