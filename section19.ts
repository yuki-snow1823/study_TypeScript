// 外部モジュール

// Node - CommonJS
// RequireJS - AMD

// module UserModule {
//     export var name = "taguchi";
// }

// 消したts

// import User = require("./user_commonjs");
import User = require("./user_amd");

console.log(User.name);
