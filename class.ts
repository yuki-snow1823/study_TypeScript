// クラス
// public, protected, private

class User {
  constructor(private _name: string) {}
  public sayHi(): void {
    console.log("hi! i am " + this._name);
  }
  get name() {
    return this._name;
  }
  set name(newValue: string) {
    this._name = newValue;
  }
}

var tom = new User("Tom");
// getterによる処理
console.log(tom.name);

// setterによる処理
tom.name = "TOM";
console.log(tom.name);
tom.sayHi();
