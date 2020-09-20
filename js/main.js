"use strict";

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//      makeTest: function() {
//          console.log('Test');
//      },
// };

// options.makeTest();

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object' ) {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);


// const arr = [1, 23, 31, 16, 8];
// arr.sort(compareNum);// сортрует в алфавитном порядке
// console.log(arr);

// function compareNum(a, b) {
//     return a - b; 
// }

//  arr.pop(); //удалаяет последний элемент

//  console.log(arr);
 
//  arr.push(10);// добавляет элемент в конец списка

//  console.log(arr);

//  for ( let value of arr) {
//      console.log(value);
     
//  }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
    
// });
// const srt = prompt('dd', '');
// const products = srt.split(', ');// из строки делает массив 
// products.sort();// сортрует в алфавитном порядке

// console.log(products.join('; '));// объединяет элементы массива 

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);

// console.log(a);

// const obj = {
//     a: 5,
//     b: 1,
// };

// const copy = obj;

// function copy(mainObj) {
//     let objCopy = {};

//     for(let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     B: 5, 
//     c: {
//         x: 7,
//         Y: 4,
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const numbers = {
//     a: 2,
//     B: 5, 
//     c: {
//         x: 7,
//         Y: 4,
//     }
// };

// const add = {
//     d: 24,
//     f: 54, 
// };

// const clone = Object.assign({}, add);

// clone.d = 100;

// console.log(add);
// console.log(clone);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// newArr[2] = 'bdee';

// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo', 'rutube'];
// const newVideo = [...video];
// console.log(newVideo);

// const blogs = ['wordpress', 'livejournal', 'blogger'];

// const internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);


// function saw (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// saw(...video);

// const obj20 = {
//     d: 40,
//     r: 'кура'
// };

// const newobj20 = {...obj20};
// newobj20.d = 'changed'

// console.log(newobj20);
// console.log(obj20);



const trupper = {
    health: 100,
    armor: 100,
    hungry: true,
};
const nick = Object.create(trupper);

nick.naked = false;
 
Object.setPrototypeOf( nick, trupper);

nick.__proto__ = trupper;//устаревшая форма записи

console.log(nick);
console.log(nick.armor);

