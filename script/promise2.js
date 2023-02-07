let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// 将每个 url 映射（map）到 fetch 的 promise 中
let requests = urls.map(url => fetch(url));

// Promise.all 等待所有任务都 resolved
Promise.all(requests)
    .then(responses => responses.forEach(
        response => console.log(`${response.url}: ${response.status}`)
    ));

async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)

    if (response.status == 200) {
        let json = await response.json(); // (3)
        return json;
    }

    throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
    .catch((error) => console.log(error)); // Error: 404 (4)