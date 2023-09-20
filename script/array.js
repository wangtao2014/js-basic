'use strict'

let fruits = ["apple", "orange", "123"];
console.log(fruits.at(-1));

for (let value of fruits) {
    console.log(`hello ${value}`);
}

let animals = ["dog", "cat", "tiger"];

for (let value of animals) {
    console.log(value);
}

let hello = "hello";
console.log(typeof hello);

const f1 = function (num1, num2) {
    return num1 + num2;
}
console.log(f1(1,2));

const f2 = (a, b) => a * b;
console.log(f2(2, 3));

const numbers = [1, 2, 3];
const newFirstNumber = 4;
const result = numbers.concat(newFirstNumber);
// const result = [newFirstNumber].concat(numbers);
console.log(numbers);
console.log(result);

const total = result.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total);