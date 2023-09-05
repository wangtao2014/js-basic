const obj = {
    name: "孙悟空",
    age: 18
};

const handler = {
    // get 用来指定读取数据时的行为
    get(target, prop, receiver) {
        return target[prop];
    },
    set(target, prop, value, receiver) {
        target[prop] = value;
    }
};

const proxy = new Proxy(obj, handler);

proxy.name = "猪八戒";
console.log(proxy.name);