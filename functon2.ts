// var add = function (a: number, b: number) {
//   return a + b;
// }

// 同義 ちなみに三個目のnumberはaddの型
// var add = (a: number , b:number) :number => {
//   return a + b;
// };

var add = (a: number, b: number): number => a + b;


console.log(add(5, 3));
