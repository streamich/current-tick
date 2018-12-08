// const asap = require('./lib/asap').default;
const currentTick = require('./lib').default;

currentTick(() => console.log('world!'));
console.log('Hello');
// 👉 Hello world!
