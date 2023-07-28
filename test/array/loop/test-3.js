// 数组循环
const data = [...new Array(100000000)].map((_, i) => i);
console.time('array-3');
for (let i = 0; data[i] != null; i++) {}
console.timeEnd('array-3');
// array-3: 53.345ms