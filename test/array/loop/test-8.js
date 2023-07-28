// 数组循环
const data = [...new Array(100000000)].map((_, i) => i);
console.time('array-8');
for (let i of data) {}
console.timeEnd('array-8');
// array-8: 1.107s