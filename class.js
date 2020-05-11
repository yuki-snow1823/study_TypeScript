var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log("こんにちは、私は" + this.name);
    };
    return User;
}());
var tom = new User("Tom");
console.log(tom.name);
tom.sayHi();
