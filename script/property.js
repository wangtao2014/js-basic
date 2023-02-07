'use strict';

let user = {};

/* 属性描述符：
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

// 修改或创建属性
// Object.defineProperty(obj, propertyName, descriptor)

Object.defineProperty(user, "name", {
    value: "John",
    "writable": true,
    "configurable": true,
});

// 属性描述符”对象：它包含值和所有的标志
let property = Object.getOwnPropertyDescriptor(user, "name");
console.log(JSON.stringify(property, null, 2));

user.name = "Pete";

// 对象中内建的 toString 是不可枚举的
let worker = {
    name: "John",
    toString() {
        return this.name;
    }
}

Object.defineProperty(worker, "toString", {
    enumerable: false, // 不可枚举 不可枚举的属性也会被 Object.keys 排除
});

for (let key in worker) {
    console.log(key);
}

// 不可配置标志（configurable:false）有时会预设在内建对象和属性中
// 不可配置的属性不能被删除，它的特性（attribute）不能被修改
// configurable: false 防止更改和删除属性标志，但是允许更改对象的值

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(JSON.stringify(descriptor, null, 2));
/*
 {
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

// Object.defineProperties(obj, descriptors)，允许一次定义多个属性
Object.defineProperties(worker, { 
    age: { value: 30, writable: false, enumerable: true, configurable: true },
    desc: { value: "haha", writable: true, enumerable: true, configurable: true },
});

for (let key in worker) {
    console.log(key);
}

// 要一次获取所有属性描述符，我们可以使用 Object.getOwnPropertyDescriptors(obj) 方法

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(worker));
console.log(Object.entries(clone));