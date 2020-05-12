// 変数とかメソッドをそのクラスのメンバーと呼ぶ
// クラスに紐づいたメンバーを静的メンバーという
// クラス
// 静的メンバ
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.count++;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this.name);
    };
    User.showDescription = function () {
        console.log("this class is about users");
    };
    User.count = 0;
    return User;
}());
var tom = new User("Tom");
var bob = new User("Bob");
console.log(User.count); // ユーザーに、つまりクラスに紐づく数が把握できる
User.showDescription();
