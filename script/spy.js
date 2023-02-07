function work(a, b) {
    console.log(a + b); // work 是一个任意的函数或方法
}

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
}

// eslint-disable-next-line no-func-assign
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}

function f(x) {
    console.log(x);
}

function delay(func, ms) {
    return function () {
        // 箭头函数没有自己的 this 和 arguments
        setTimeout(() => func.apply(this, arguments), ms);
    }
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test"); // 在 1500ms 后显示 "test"