let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// 将每个 url 映射（map）到 fetch 的 promise 中
let requests = urls.map(url => fetch(url));

// Promise.all 接受一个可迭代对象（通常是一个数组项为 promise 的数组），并返回一个新的 promise
// Promise.all 等待所有任务都 resolved
Promise.all(requests)
    .then(responses => responses.forEach(
        response => console.log(`${response.url}: ${response.status}`)
    ));

/*
async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)

    if (response.status === 200) {
        let json = await response.json(); // (3)
        return json;
    }

    throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
    .catch((error) => console.log(error)); // Error: 404 (4)
*/
// promise.all 是全有或全无的情况，而 promise.allSettled 则是每个 promise 都完成的情况
// Promise.allSettled 是对 promise.all 的补充，它接受一个 promise 数组，并返回一个 promise 数组
// promise.race 与promise.all 类似，但只等待第一个 promise 完成的结果（或 error）进行返回
// promise.any 与 promise.race 类似，promise.any 只等待第一个 fulfilled 的 promise 的结果
// promise.resolve 和 promise.reject 因为现在使用 await 和 async 关键字，所以很少使用

// Promisification 由于许多函数和库都是基于回调的，因此，在实际开发中经常会需要进行这种转换。
// 因为使用 promise 更加方便，所以将基于回调的函数和库 promise 化是有意义的。
// promisify wrapper function

let loadScriptPromise = function (src) {
    return new Promise((resolve, reject) => {
        loadScript(src, function (error, script) {
            if (error) reject(error);
            else resolve(script);
        });
    });
}

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

loadScriptPromise('./script/promise.js').then((script) => console.log('🔥' + script));