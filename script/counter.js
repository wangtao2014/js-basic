function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    }
}

console.log(typeof makeCounter);

let counter = makeCounter();
alert(counter);
console.log(counter());
console.log(counter());
console.log(counter());

function sum(num1) {

    function total(num2) {
        return num1 + num2;
    }

    return total;
}

console.log(sum(3)(4));

/* .. inBetween 和 inArray 的代码 */
function inBetween(start, end) {
    return function (item) {
        return item >= start && item <= end;
    }
}

function inArray(arr) {

    return function (item) {
        return arr.includes(item);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2


let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
console.log(typeof users);
function byField(key) {
    
    return function(a, b) {
        return a[key] > b[key] ? 1 : -1;
    }
}

users.sort(byField("name"));
console.log(users);
// users.sort(byField("age"));
// console.log(users);