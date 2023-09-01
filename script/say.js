function sayHi(name) {
    return `Hi, ${name}`;
}

function sayHello(name) {
    return `Hello ${name}`;
}

// 在一个模块中，顶级 this 是 undefined。
// 将其与非模块脚本进行比较会发现，非模块脚本的顶级 this 是全局对象

module.exports = {
    sayHello,
    sayHi,
}