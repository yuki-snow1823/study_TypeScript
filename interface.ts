interface Result { // これ。型をまとめることができる
  a: number;
  b: number;
}

function getTotal(result: Result) {
  return result.a + result.b;
}

var result = {
  a: 32,
  b: 58,
  c: "hello", // これもResult型だとみなされる。aとbはクリアされるから
};

console.log(getTotal(result));
