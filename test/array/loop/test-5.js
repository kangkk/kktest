// 数组循环
const data = [...new Array(100000000)].map((_, i) => i);
console.time('array-5');
Array.prototype.forEach.call(data, _ => {})
console.timeEnd('array-5');
// array-5: 893.44ms