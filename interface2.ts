// Interface

interface SpringResult {
  a: number;
}

interface FallResult {
  b: number;
}

interface FinalResult extends SpringResult, FallResult {
  final?: number;
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
