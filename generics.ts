// Generics 抽象化されたデータ型

// function getStringArray(value: string): string[] {
//     return [value, value, value];
// }
// function getNumberArray(value: number): number[] {
//     return [value, value, value];
// }

// 一個にまとめるということ any型だと良くない
// Tはなんでもいいブロック変数みたいなもん
function getArray<T>(value: T): T[] {
  return [value, value, value];
}

console.log(getArray<number>(3)); // ここで方を指定する
console.log(getArray<string>("hello"));
