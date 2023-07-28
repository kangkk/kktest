// 数组循环
const data = [...new Array(10000000)].map((_, i) => ({i}));
console.time('array-1');
const hasData = data.find(_ => _.i === 9999999)
console.timeEnd('array-1');
console.log(JSON.stringify(hasData))
// array-1: 110.161ms
