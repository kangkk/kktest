// 数据交换
// 交换索引值 1 和 99 的值
const data = Array.apply(null, Array(100)).map((_, i) => i);
console.time('array-2');
let tmp = void 0
for (let i = 0; i < 100000000; i++) {
  tmp = data[99];
  data[99] = data[1];
  data[1] = tmp;
}
console.timeEnd('array-2');
// array-2: 122.029ms
