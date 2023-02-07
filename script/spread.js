function sumAll(...args) {
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }

    return sum;
}

console.log(sumAll(1, 2, 3, 4));

// Rest 参数必须放到参数列表的末尾
function showName(firstName, secondName, ...titles) {
    console.log(arguments.length);
    console.log(firstName, secondName, titles);
}

showName("wang", "tao", "hello", "world");

// 箭头函数没有 "arguments" also this pointer 

// Spread 语法

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) );