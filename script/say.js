// 在声明前导出
export function sayHi(name) {
    return `Hi, ${name}`;
}

export function sayHello(name) {
    return `Hello ${name}`;
}

// 在一个模块中，顶级 this 是 undefined
// 将其与非模块脚本进行比较会发现，非模块脚本的顶级 this 是全局对象
// export class 和 export function 的末尾不需要加分号
// 但是如果有很多要导入的内容，我们可以使用 import * as <obj> 将所有内容导入为一个对象
// eg: import * as say from "./say.js"

// 导出与声明分开
// export {
//     sayHello,
//     sayHi,
// }