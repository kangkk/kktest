// 数组循环
const data = [...new Array(100000000)].map((_, i) => i);
console.time('array-1');
for (let i = 0; i < data.length; i++) {}
console.timeEnd('array-1');
// array-1: 53.945ms
