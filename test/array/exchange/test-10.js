// 数据交换
// 交换索引值 1 和 99 的值
// 数字之间的加减运算
const data = Array.apply(null, Array(100)).map((_, i) => i);
console.time('array-10');
for (let i = 0; i < 100000000; i++) {
  eval("data[1]=" + data[99] + "; data[99] = " + data[1]);
}
console.timeEnd('array-10');
// array-10: 33.550s
