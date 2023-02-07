let arr = ["hello", "world"];
let [first, second] = arr;
console.log(first, second);

// 等号右侧可以是任何可迭代对象
let string = "abc";
let [firstChar, secondChar, thirdChar] = string;
console.log(firstChar, secondChar, thirdChar);

let [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three);

// 赋值给等号左侧的任何内容
let user = {};
[user.lastname, user.firstname] = "John Smith".split(" ");
console.log(user.lastname, user.firstname);

// 交换变量值的技巧
let guest = "guest";
let admin = "admin";

[guest, admin] = [admin, guest];
console.log(guest, admin);

// 默认值
let [name = "Guest", surname = "Anonymous"] = ["Julius"];
console.log(name, surname);

// 数据结构使用[] 对象结构使用 {}

let userA = {
    nameA: "hello",
    addressA: "henan",
};

let { nameA, addressA } = userA;
console.log(nameA, addressA);

// 改变 let {...} 中元素的顺序 更换名称
let { height: h, width: w, title } = { title: "Menu", height: 200, width: 100 }
console.log(h, w, title);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function checkNullObj(obj) {
    if (Object.keys(obj).length === 0) {
        return false // 如果为空,返回false
    }
    return true // 如果不为空，则会执行到这一步，返回true
}

function topSalary(salaries) {
    if (!checkNullObj(salaries)) {
        return null;
    }

    let [topName, topSalary] = [null, 0];
    // let topName = null;
    // let topSalary = 0;

    for (let [key, value] of Object.entries(salaries)) {
        if (value >= topSalary) {
            [topName, topSalary] = [key, value];
            // topSalary = value;
            // topName = key;
        }
    }

    return topName;
}

console.log(topSalary(salaries));


