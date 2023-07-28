// 数据交换
// 交换索引值 1 和 99 的值
const data = Array.apply(null, Array(100)).map((_, i) => i);
console.time('array-1');
for (let i = 0; i < 100000000; i++) {
  data[1] = data.splice(99, 1, data[1])[0];
}
console.timeEnd('array-1');
// array-1: 4.381s
