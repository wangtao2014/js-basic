'use strict';

// JavaScript 在处理函数时提供了非凡的灵活性

function slow(x) {
    console.log("Called slow");
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    }
}

// eslint-disable-next-line no-func-assign
slow = cachingDecorator(slow);
console.log( slow(1) ); // slow(1) 被缓存下来了，并返回结果
console.log( "Again: " + slow(1) ); // 返回缓存中的 slow(1) 的结果

console.log( slow(2) ); // slow(2) 被缓存下来了，并返回结果
console.log( "Again: " + slow(2) ); // 返回缓存中的 slow(2) 的结果

let worker = {
    someMethod() {
        return 1;
    },
    slow(x) {
        console.log("Called slow");
        return x * this.someMethod();
    }
};

console.log(worker.slow(1));
worker.slow = cachingDecorator(worker.slow);
console.log(worker.slow(2));

console.log("======================================");
function sayHi() {
    console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// 使用 call 来调用函数 使用 call 将不同的对象传递为 "this"
sayHi.call(user); // John
sayHi.call(admin); // Admin 

// 将所有参数连同上下文一起传递给另一个函数被称为“呼叫转移（call forwarding）”
// func.call(context, ...args);
// func.apply(context, args);
// 装饰器 是一个围绕改变函数行为的包装器。主要工作仍由该函数来完成