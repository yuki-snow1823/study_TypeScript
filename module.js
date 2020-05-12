// 内部モジュール
// 変数のぶつかりとかを防ぐ
var userModule;
(function (userModule) {
    userModule.name = "taguchi"; //exportしないとコンパイルエラー
    var AddressModule;
    (function (AddressModule) {
        var zip = "111-1111";
    })(AddressModule = userModule.AddressModule || (userModule.AddressModule = {}));
})(userModule || (userModule = {}));
// モジュール名＋ドット
// console.log(userModule.name)
var addr = UserModule.AddressModule;
console.log(addr.zip);
// 短くすることもできる
