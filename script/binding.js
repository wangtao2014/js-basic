let user = {
    firstName: "John",
    sayHi() {
        console.log(`hello, ${this.firstName}`);
    },
    syaBye() {
        console.log(`bye, ${this.firstName}`);
    }
};

setTimeout(user.sayHi, 1000); // undefined

// 我们想将一个对象方法传递到别的地方（这里 —— 传递到调度程序），然后在该位置调用它。如何确保在正确的上下文中调用它？
// 包装器-包装函数：

setTimeout(function () {
    user.sayHi(); // 从外部词法环境中获取到了 user
}, 1000);
setTimeout(() => user.sayHi(), 1000);

// 出现延迟后，改变user，会使得结果不符合预期
// user = {
//     sayHi() { console.log("Another user in setTimeout!"); }
// };

// 为了避免这种情况，我们可以使用 bind 方法，它创建一个新的函数，将 this 绑定到 user，然后再传递给 setTimeout：
// 稍后我们会讨论 bind 的更多细节
// let boundFunc = func.bind(context);

// let sayHi = user.sayHi.bind(user);

for (let key of user) {
    if (typeof user[key] === 'function') {
        user[key] = user[key].bind(user);
    }
}

setTimeout(user.syaBye, 1000); 

user = {
    sayHi() { console.log("Another user in setTimeout!"); }
};
