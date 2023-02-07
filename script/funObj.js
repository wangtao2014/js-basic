'use strict';

// 函数对象
function sayHi() {
    console.log('Hi');
}

// 属性 name
console.log(sayHi.name);

// 另一个内建属性 “length”，它返回函数入参的个数, rest 参数不参与计数
console.log(sayHi.length);

function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }

}

// 对于肯定的回答，两个 handler 都会被调用
// 对于否定的回答，只有第二个 handler 被调用
ask("Question?", () => console.log('You said yes'), result => console.log(result));

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let result = quickSort([5, 3, 7, 6, 2, 9]);
console.log(result);

// 命名函数表达式

function makeCounter() {

    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
}

let counter = makeCounter();

counter.count = 10;
console.log(counter()); // 10
counter.set(15)
console.log(counter());
counter.decrease();
console.log(counter());

// ========================================

function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

alert(sum(1)(2)(3));