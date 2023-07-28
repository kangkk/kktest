// 数组循环
const data = [...new Array(100000000)].map((_, i) => i);
console.time('array-7');
data.map(_ => {})
console.timeEnd('array-7');
// array-7: 1.711s