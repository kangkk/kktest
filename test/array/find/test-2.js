// 数组循环
const data = [...new Array(10000000)].map((_, i) => ({i}));
console.time('array-2');
const list = data.map(_ => _.i)
const hasData = list.includes(9999999)
console.timeEnd('array-2');
console.log(JSON.stringify(hasData))
// array-2: 172.294ms
