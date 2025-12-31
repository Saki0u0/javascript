//基礎編
// Q1
let saki = {
　nickname:"えびちゃん",
  age:28
}

console.log(`私のニックネームは${saki.nickname}です。年齢は${saki.age}歳です。`)


// Q2
let  languages = [ "JavaScript", "PHP", "Ruby", "Python", "Go"]

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`)


// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age)

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1])


// Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3)


// Q6
function sayhallo() {
  console.log("Hello")
}

sayhallo() 


let sayWorld = function(){
  console.log("World")
}

sayWorld()


// Q7
user.birthday = "2000-09-27";

console.log(user.birthday )

user.sayHello = function () {
  console.log("Hello!");
};

user.sayHello();


// Q8
let calc = {};

calc.add = function (x,y) {
  console.log(x + y);
};

calc.subtract = function (x,y) {
  console.log(x - y)
};

calc.multiply = function (x,y) {
  console.log(x * y)
};

calc.divide = function (x,y) {
  console.log(x / y)
};

calc.add(3, 4);        
calc.subtract(15, 5); 
calc.multiply(7, 7);  
calc.divide(10, 2); 


//Q9

function remainder (x,y) {
  return x % y;
}

console.log(`5を3で割った余りは${remainder(5,3)}です。`)


//10

// function foo() {
//   let x = 1;
// }
// console.log(x);

// 関数の中で定義した変数は関数内でスコープが有効であり、関数の外から参照することができないため


//応用編

//Q1

console.log(Math.floor(Math.random()* 10))


//Q2

setTimeout(function(){
  console.log("Hello!");
},3000);


//Q3

let num = -1

if (num > 0){
  console.log('num is greater than 0')
}else if (num < 0){
  console.log('num is less than 0')
}else if (num === 0){
   console.log('num is 0')
}

//Q4

let numbers = [];

for(let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);



//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
   if (typeof mixed[i] !== 'number') {
    console.log('not number');
  } else if (mixed[i] % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

