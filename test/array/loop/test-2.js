// 数组循环
const data = [...new Array(100000000)].map((_, i) => i);
console.time('array-2');
for (let i = 0, len = data.length; i < len; i++) {}
console.timeEnd('array-2');
// array-2: 50.255ms