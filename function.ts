// 関数

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3)); // 8
// 違うものを入れればコンパイル時にエラーが出る。

// 返り値がない場合の型 void

// bに引数が来るかわからない時(引数をオプションにしたい場合)
// b = 10とすれば初期値が入る
function add2(a: number, b?: number): number {
  if (b) {
    return a + b;
  } else {
    return a + a;
  }
}
console.log(add2(5));
