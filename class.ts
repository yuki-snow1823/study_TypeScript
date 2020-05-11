class User {
  name: String;
  constructor(name: String) {
    this.name = name;
  } // 送られてきたものを使う
  // コンストラクタは簡単に言うとインスタンスを作成したタイミングで実行されるメソッドのことです。
  // constructor(public name: String) {
  // } //これでも上と全く同じ動きをする
  sayHi(): void {
    console.log("こんにちは、私は" + this.name);
  }
}

var tom = new User("Tom");
console.log(tom.name);
tom.sayHi();
