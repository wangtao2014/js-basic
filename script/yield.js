function* gen() {
    yield 1;
    yield 2;
    yield 4;
}

let generate = gen();
// console.log(generate.next());
// console.log(generate.next());
// console.log(generate.next());
// console.log(generate.next());

for (let value of generate) {
    console.log(value);
}