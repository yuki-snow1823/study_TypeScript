// JSは動的 動的型付け<=>静的
// 動的：変数に型を決めたあと、別の型を入れていいという仕様

import { thistle } from "color-name";

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

var i: number;
var i = 10 // こう書いてもnumber型だと理解してくれる：型推論

var x // これだけだとvar x:anyとしていることになる。「any」型である。動的というわけではない。
x = 10
x = "title"

var results: number[]
results = [1,2,3,4,5]
