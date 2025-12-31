// alert('Hello World!');

// console.log('Hello World!');

// console.log('1つ目の値', '2つ目の値');

// let text = 'JavaScriptの練習';
// console.log(text);

// text = 'JavaScriptをマスターした';
// console.log(text);

// 処理①
// let longText =
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
// console.log(longText);
// console.log(longText);
// console.log(longText);

// // 処理②
// console.log(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// );
// console.log(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// );
// console.log(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// );

// let age = 23;
// console.log(age);

// let testText;
// console.log(testText); 

// let again = '定義しました';
// again = '再代入はできます';

// let again = '再定義します'; // Uncaught SyntaxError: Identifier 'again' has already been declared


// const constant = 'これは定数です';
// constant = '再代入できません。'; 

// let name = 'ジョニー';
// let greet = '私は' + name + '！';
// console.log(greet);

// let template = 'テンプレートリテラル'; // ※ これは文字列
// let templateText = `これが${template}です。
// ${template}は改行もできます。`; // これはテンプレートリテラル
// console.log(templateText);

// let numTen = 10;
// let strTen = '10'; // 追記
// console.log(numTen, strTen); // 値を追加

// let minus = -10;
// let decimal = 1.1;
// console.log(minus, decimal);

// let num1 = 25;
// let num2 = 2;

// console.log(num1 + num2);

// let num1 = 25;
// let num2 = 2;

// console.log(num1 - num2); // - に変更

// let num1 = 25;
// let num2 = 2;

// console.log(num1 / num2); // / に変更

// let number = 5;
// number = number + 3;
// console.log(number);

// let number = 5;
// number += 3; // number = number + 3と同じ
// console.log(number);

// let number = 5;
// number += 3; // number = number + 3と同じ
// console.log(number);
// // 以下を追記
// number -= 1; // number = number - 1と同じ
// console.log(number);
// number *= 5; // number = number * 5と同じ
// console.log(number);
// number /= 7; // number = number / 7と同じ
// console.log(number);

// let increment = 0;
// console.log(increment);
// increment++; // increment += 1と同じ
// console.log(increment);

// let decrement = 10;
// console.log(decrement);
// decrement--; // decrement -= 1と同じ
// console.log(decrement);

// let bigNum = 25;
// let smallNum = 2;

// console.log(bigNum % smallNum);

let bigNum = 25;
let smallNum = 2;

// 以下を変更
console.log(bigNum ** smallNum); 

let stringNum1 = '25';
let stringNum2 = '2';

console.log(stringNum1 + stringNum2);

let stringNum = '25';
let numberNum = 2;

console.log(stringNum + numberNum); // => 252

let name1 = 'John';
let name2 = 'Bob';
let name3 = 'Michael';
let name4 = 'Emma';

let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names);

console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let emptyNames = [];

emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);

let John = {
  name: 'John', // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(John.bloodType);

let Andy = {};

Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';

let fruits = ['apple', 'banana', 'grape'];

let apple = {
  color: 'red',
  shape: 'round',
  taste: 'wonderful',
};

console.log(apple);

let vehicles = [
  { name: 'car', color: 'red', speed: 'normal' },
  { name: 'train', color: 'green', speed: 'fast' },
  { name: 'airplane', color: 'grey', speed: 'faster' },
];

let one = '1';
let two = 2;

console.log('one →', typeof one, one); // one → string 1
console.log('two →', typeof two, two); // one → number 2

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;

  console.log('ここはreturnよりも後ろの処理です。');
}

getArea(5);

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

// 以下を追記
doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

function output() {
  console.log('コールバック関数が呼び出されました');
}

doFunc(output)