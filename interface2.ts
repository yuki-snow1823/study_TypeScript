// Interface 継承

// aの情報を持っている
interface SpringResult {
  a: number;
}

interface FallResult {
  b: number;
}

interface FinalResult extends SpringResult, FallResult { //extendsで名前を書けば継承できる
  final?: number; // 型の定義ではなくオプションにしている、必須ではなき
}

// function getTotal(result: FinalResult) {
//     return result.a + result.b + result.final;
// }

function getTotal(result: FinalResult) {
  if (result.final) {
    return result.a + result.b + result.final;
  } else {
    return result.a + result.b;
  }
}

// var result = {
//     a: 32,
//     b: 58,
//     final: 82
// };

var result = {
  a: 32,
  b: 58,
};

console.log(getTotal(result));
