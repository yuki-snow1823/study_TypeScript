// Interface -> Class

interface GameUser {
  score: number;
  showScore(): void;
}

// これを必須で入れるということ、大規模開発で必要

class User implements GameUser {
  name: string;
  score: number = 0; // これがないとエラーになる
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): void {
    console.log("hi! i am " + this.name);
  }
  showScore(): void {
    console.log("score " + this.score); // これがないとエラーになる
  }
}
var bob = new User("Bob")
