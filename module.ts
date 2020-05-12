// 内部モジュール
// 変数のぶつかりとかを防ぐ

module userModule {
  export var name = "taguchi"; //exportしないとコンパイルエラー
  export module AddressModule {
    export var zip = "111-1111";
  }
}
// モジュール名＋ドット
// console.log(userModule.name)

// クラスやモジュールはパスカルケースの方が良かった
import addr = userModule.AddressModule;
console.log(addr.zip);

// 短くすることもできる
