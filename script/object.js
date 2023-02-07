'use strict';

let obj = {};

function User1() { return obj; }
function User2() { return obj; }

console.log(new User1() == new User2());

// Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("value?", 0);
    }
}

let accumulator = new Accumulator(100);
accumulator.read();
accumulator.read();

console.log(accumulator.value);

// ReferenceError: user is not defined
let user = {};
console.log(user.address?.street); // Uncaught TypeError: Cannot read properties of undefined (reading 'street')

console.log("hello world");