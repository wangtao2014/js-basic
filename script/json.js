'use strict'

// JSON.stringify 将对象转换为 JSON
// JSON.parse 将 JSON 转换回对象

/**
 * 字符串使用双引号。JSON 中没有单引号或反引号。所以 'John' 被转换为 "John"。
    对象属性名称也是双引号的。这是强制性的。所以 age:30 被转换成 "age":30。
    Objects { ... }
    Arrays [ ... ]
    Primitives：
        strings，
        numbers，
        boolean values true/false，
        null。
    
    remark：不得有循环引用
 */

let user = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null,
    sayHi() { // 被忽略
        console.log('sayHi');
    },
    [Symbol("id")]: 123, // 被忽略
    something: undefined, // 被忽略
    toJSON() {
        return this.name;
    },
};

// let jsonString = JSON.stringify(user, ["name", "age"]);
let jsonString = JSON.stringify(user, function replacer(key, value) {
    return (key == "courses" || key == "spouse") ? undefined : value;
}, 2);

console.log(jsonString);

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user1 = JSON.parse(userData);
console.log(user1.friends[3]);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
    if (key == "date") {
        return new Date(value);
    }
    return value;
});

console.log(meetup.date.getFullYear());