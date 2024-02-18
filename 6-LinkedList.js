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
// head = []
// console.log(reverseList(head))



// Merge two sorted lists

var mergeTwoLists = function(list1, list2) {
    

    let newArr = []

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] > list2[j]) {
                newArr.push(list2[j])
            } else if (list1[i] < list2[j]){
                newArr.push(list1[i])
            } else {
                newArr.push(list1[i], list2[j])
            }
        }
    }
    return newArr
};


list1 = [1,2,4], list2 = [1,3,4]
// list1 = [], list2 = []
// list1 = [], list2 = [0]
console.log(mergeTwoLists(list1, list2))