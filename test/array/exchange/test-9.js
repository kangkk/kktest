// 数据交换
// 交换索引值 1 和 99 的值
// 数字之间的加减运算
const data = Array.apply(null, Array(100)).map((_, i) => i);
console.time('array-9');
for (let i = 0; i < 100000000; i++) {
  data[1] = data[99] - data[1] +(data[99] = data[1]);
}
console.timeEnd('array-9');
// array-9: 197.948ms
