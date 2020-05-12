// クラス
// public, protected, private

class User {
  constructor(private _name: string) {}
  public sayHi(): void {
    console.log("hi! i am " + this._name);
  }
}

class AdminUSer extends User {
  private _age: number;
  constructor(_name: string, _age: number) {
    super(_name);
    this._age = _age
  }
  public sayHi(): void {
    console.log("my age" + this._age);
    super.sayHi(); //親クラスを呼んでいる オーバーライド
    // _nameとかはprivateだから呼べない
    // 解決策：publicにすること
    // ここで【protected】を使う。自分のクラス及び、自分を継承するクラスに使える
  }
}

var bob = new AdminUSer("Bob", 23);
bob.sayHi();
