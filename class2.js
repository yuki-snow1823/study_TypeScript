// クラス
// public, protected, private
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(_name) {
        this._name = _name;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this._name);
    };
    return User;
}());
var AdminUSer = /** @class */ (function (_super) {
    __extends(AdminUSer, _super);
    function AdminUSer(_name, _age) {
        var _this = _super.call(this, _name) || this;
        _this._age = _age;
        return _this;
    }
    AdminUSer.prototype.sayHi = function () {
        console.log("my age" + this._age);
        _super.prototype.sayHi.call(this); //親クラスを呼んでPいる
    };
    return AdminUSer;
}(User));
var bob = new AdminUSer("Bob", 23);
bob.sayHi();
