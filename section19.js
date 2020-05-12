"use strict";
// 外部モジュール
exports.__esModule = true;
// Node - CommonJS
// RequireJS - AMD
// module UserModule {
//     export var name = "taguchi";
// }
// 消したts
// import User = require("./user_commonjs");
var User = require("./user_amd");
console.log(User.name);
