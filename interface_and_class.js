// Interface -> Class
// これを必須で入れるということ、大規模開発で必要
var User = /** @class */ (function () {
    function User(name) {
        this.score = 0; // これがないとエラーになる
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this.name);
    };
    User.prototype.showScore = function () {
        console.log("score " + this.score); // これがないとエラーになる
    };
    return User;
}());
var bob = new User("Bob");
