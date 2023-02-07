'use strict';

// 在浏览器中，使用 var（而不是 let/const！）声明的全局函数和变量会成为全局对象的属性
var globalV = "hello";

function globalF() {
    console.log("globalF");
}

console.log(window.globalV, globalThis.innerHeight);
globalF();

console.log(currentUser.name);
console.log(globalThis.currentUser.name);

// 使用 polyfills

if (!window.Promise) {
    console.log("Your browser is really old!");
} else {
    console.log("Your browser is new!");
}