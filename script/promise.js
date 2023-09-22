console.log('start out');
let promise = new Promise(function (resolve, reject) {
    console.log('start');
    setTimeout(function () {
        resolve("done123");
    }, 1000);
    console.log('end');
});
console.log('start end');

promise.then(result => 'hello ' + result).then(result => console.log('3' + result));
promise.then(result => console.log('2' + result));
promise.then(result => console.log('4' + result));

// 返回 promise 使我们能够构建异步行为链

/*
promise.finally(() => console.log("finally"))
    .then(
        result => console.log(result),
        error => console.log(error)
    ).catch(error => console.log(error));


setTimeout(() => {
    // state 和 result 都是内部的属性 
    console.log(promise.state, promise.result);
}, 3000);
*/

// 通过 new Promise 构造器 executor 被自动且立即调用
// executor 接受两个参数：resolve 和 reject。这些函数由 JavaScript 引擎预先定义，因此我们不需要创建它们。我们只需要在准备好（译注：指的是 executor 准备好）时调用其中之一即可


// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("value"), 2000);
// }).then(result => console.log(result))
//     .finally(() => console.log("Promise ready")); // 先触发
// .then(result => console.log(result)); // <-- .then 显示 "value"


function delay(ms) {
    // return new Promise(function(resolve) {
    //     setTimeout(() => resolve(), ms);
    // });

    return new Promise(resolve => setTimeout(resolve, ms));
}

// delay(3000).then(() => console.log('runs after 3 seconds'));