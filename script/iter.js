'use strict';

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
}

for (let num of range) {
    console.log(num);
}

// mock string iterater
let str = "hello world";

let iterater = str[Symbol.iterator]();

let isDone = true;

while (isDone) {
    let result = iterater.next();
    if (result.done) {
        break;
    }
    console.log(result.value);
}

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
]);

for (let key of recipeMap.keys()) {
    console.log(key);
}

for (let value of recipeMap.values()) {
    console.log(value);
}

for (let entry of recipeMap) { // recipeMap.entries() 相似
    console.log(entry);
}

recipeMap.forEach((key, value, map) => {
    console.log(key, value, map);
});

function unique(arr) {
    /* 你的代码 */
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare, Krishna, :-O

/// weakmap and weakset
let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // 覆盖引用

for (let key of map.keys()) {
    console.log(key);
}