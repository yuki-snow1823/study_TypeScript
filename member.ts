// 変数とかメソッドをそのクラスのメンバーと呼ぶ
// クラスに紐づいたメンバーを静的メンバーという

// クラス
// 静的メンバ

class User {
    name: string;
    constructor(name: string) {
        this.name = name;
        User.count++;
    }
    sayHi(): void {
        console.log("hi! i am " + this.name);
    }
    static count: number = 0;
    static showDescription(): void {
        console.log("this class is about users"); // ここで作った
    }
}

var tom = new User("Tom");
var bob = new User("Bob");
console.log(User.count); // ユーザーに、つまりクラスに紐づく数が把握できる
User.showDescription(); // 静的メソッド
