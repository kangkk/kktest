// 数组循环
const data = [...new Array(100000000)].map((_, i) => i);
console.time('array-4');
data.forEach(_ => {})
console.timeEnd('array-4');
// array-4: 897.467ms