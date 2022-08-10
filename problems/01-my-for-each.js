/*******************************************************************************
Write a function `myForEach` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in the
element, index, and array itself. The function does not need to return any value.

Do not use the built in Array#forEach.

Examples:

myForEach(['a', 'b', 'c'], function (el, i) {
    console.log(el + ' is at index ' + i);
}); // prints
// a is at index 0
// b is at index 1
// c is at index 2

let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']
*******************************************************************************/

// 1. receiving some elements
let myForEach = function(arr, cb) {
    // 2. iterate from 0 to arr.length - 1
    for(let i = 0; i < arr.length; i++){
        // 3. run the callback function received
        cb(arr[i], i, arr)
    }
};


let test = [];
myForEach(['laika', 'belka'], function (el) {
    test.push(el.toUpperCase());
});
console.log(test); // ['LAIKA', 'BELKA']


/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myForEach;
