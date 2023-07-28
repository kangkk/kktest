// 数据交换
// 交换索引值 1 和 99 的值
const data = Array.apply(null, Array(100)).map((_, i) => i);
console.time('array-4');
for (let i = 0; i < 100000000; i++) {
  data[99] = [data[1], data[1] = data[99]][0];
}
console.timeEnd('array-4');
// array-4: 125.98ms
