/**
 * const,letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1="var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1="var変数を再宣言";
// console.log(val1);

// let val2="let変数";
// console.log(val2);

// // letは上書きが可能
// val2="let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2="let変数を再宣言";

// const val3="const変数を宣言";
// console.log(val3);

// // const変数は上書き不可能
// //val3 = "const変数を上書き";

// const val3="const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "aaaa",
  age: 28
};

val4.name = "iii";
console.log(val4);
val4.address = "tokyo";

// プロパティの追加も可能
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
console.log(val5);
val5[0] = "bird";
val5.push("monkey");

/**
 * テンプレート文字列
 */
const name = "あああ";
const age = 26;

// 「私の名前はあああです。年齢は26歳です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
// バッククォートで囲む。バッククォートは「Shift + @」で出る
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
//  function func1(str){
//   return str;
//  }

const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
// 引数の括弧は省略可能
const func2 = (str) => {
  return str;
};

// 単純にreturnするだけなど、処理が1行だけの場合、{}なしで書く
const func3 = (str) => str;

console.log(func2("func2です"));
console.log(func3("func3です"));

const func4 = (num1, num2) => {
  return num1 + num2;
};
console.log(func4(10, 20));

const func5 = (num1, num2) => num1 + num2;
console.log(func5(20, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name2: "ああああ",
//   age2: 28
// };

// const message3 = `名前は${myProfile.name2}です。年齢は${myProfile.age2}です`;
// console.log(message3);

// const { name2, age2 } = myProfile;
// const message4 = `名前は${name2}です。年齢は${age2}です`;
// console.log(message4);

const myProfile = ["aaa", 28];
const message5 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message5);

// 配列の場合は順番で受け取る
const [name3, age3] = myProfile;
const message6 = `名前は${name3}です。年齢は${age3}です`;
console.log(message6);
