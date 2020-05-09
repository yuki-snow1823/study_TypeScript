"use strict";
// JSは動的 動的型付け<=>静的
// 動的：変数に型を決めたあと、別の型を入れていいという仕様
exports.__esModule = true;
// var x = 10;
// x = "hello";
// TSは静的
// エラーになる
// var x: number = 10;
// x = "hello";
// 動的は便利だが、それが原因で不具合が起こることもある。
// 型
/*
number
string
boolean
any
*/
var i;
var i = 10; // こう書いてもnumber型だと理解してくれる：型推論
var x; // これだけだとvar x:anyとしていることになる。「any」型である。動的というわけではない。
x = 10;
x = "title";
var results;
results = [1, 2, 3, 4, 5];
// 列挙
// signal
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 1] = "Blue";
    Signal[Signal["Green"] = 2] = "Green";
})(Signal || (Signal = {}));
var results2;
console.log(Signal[0]);
console.log(results2[0]);
// example: if (results === Signal.Green){処理}
