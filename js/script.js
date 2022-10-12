"use strict";





// let number = 5;
// const leftBorderWidth = 1;
// console.log(number);
// number = 10;


// const obj = {
//     a: 50  
// };

// obj.a = 100;

// console.log(obj);


// console.log(name);
// var name = 'Oleh';

// {
//     var result = 50;
// }

// console.log(result);

// const obj = {
//     name: "Ivan",
//     age: 27,
//     isMarrried: false
// }

// // console.log(obj.name);
// console.log(obj["name"]);

// const salaries = {
//     'Oleh': 3300,
//     'Lyana': 700
// };

// // console.log(salaries.Lyana);
// let b = 222;
// salaries[b] = 123;

// console.log(salaries[b]);

// alert("Hello");

// const result = confirm("Are sure you want to close this page?");
// const answer = +prompt("Are you 18 years old?", "18");

// console.log(answer);

// const answers = [];

// // answers[0] = prompt('Як ваші справи?', '');
// // answers[1] = prompt('Як ваш робота?', '');
// // answers[2] = prompt('Як ваші діти?', '');

// console.log(typeof(answers));
// console.log(typeof(null));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`)

// const userName = 'Oleh';

// alert(`Hello, ${userName}`);

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// const isChecked = true,
//     isClose = true;

// console.log(isChecked || !isClose);    
// const myNewName = "Ostap";

//  const numberOfFilms = +prompt('How many films have you seen?', '');
 
// console.log(numberOfFilms);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('What is your last movie?', ''),
//     b = prompt('How would you rait it?', '');

 
// personalMovieDB.movies[a] = b;


// console.log(personalMovieDB);

// if (2) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100){
//     console.log('Huge number');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Right') : console.log('Error');



// switch (num) {
//     case 49:
//         console.log('Wrong');
//         break;
//     case 100:
//         console.log('Wrong');
//         break;       
//     case 50:
//         console.log('You are Right!');
//         break;
//     default:
//         console.log('Next time');
//         break;       
// }


// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dasdasda');

// const humburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
// // console.log(humburger === 3 && cola === 1 && fries);


// if (humburger ===3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('We stay here!');
// } else {
//     console.log('We leave');
// }

// // console.log(humburger || cola || fries);

// // console.log((humburger && fries));


// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log( NaN || 2 || undefined ); //2
 
// console.log( NaN && 2 && undefined ); //NaN
 
// console.log( 1 && 2 && 3 ); //3
 
// console.log( !1 && 2 || !3 ); // false
 
// console.log( 25 || null && !3 ); // 25
 
// console.log( NaN || null || !3 || undefined || 5); //5
 
// console.log( NaN || null && !3 && undefined || 5); //5
 
// console.log( 5 === 5 && 3 > 1 || 5); //true


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let num = 50;

// // while (num <= 55){
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }

// // while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if ( i === 6){
//         continue;
//     }
    
    
//     console.log(i);
    
// }

// for ( let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
    
//     for (let j = 0; j < i; j++) {
//         result += '*'; 
//     }

//     result += '\n';
// }

// console.log(result);



// first: for (let i = 0; i < 3; i++) {
//         console.log(`First level: ${i}`);
//         for (let j = 0; j < 3; j++){
//             console.log(`Second level: ${j}`);
//             for (let k = 0; k < 3; k++){
//                 if (k === 2) break first;
//                 console.log(`Third level: ${k}`);
//             }
//         } 

// }

// function firstTask() {
//     // Пишем решение вот тут
//     for (let i = 5; i < 10; i++) {
//         console.log(i);
//     }

    
// }


// for (let i = 20; i > 9; i--) {
//     if (i === 13){
//         continue;
//     }
// console.log(i);
// }

// for (let i = 2; i < 11; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
    
// }

// for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }


    // let i = 2;
    // while (i < 16){
    //     if (i % 2 === 0){
    //         i++;
    //         continue;
    //     }
    //     console.log(i);
    //     i++;
    // }



    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // // Пишем решение вот тут
    // for (let i = 0; i < arr.length; i++) {
    //     result.push(arr[i]);
    // }
    // console.log(result);

    // let arr22 = ['dasd', 'dasdas'];

    // arr22[0] = 'eqwe' + ' - dsadas';
    // console.log(arr22);



    // let data = [5, 10, 'Shopping', 20, 'Homework'];

    // // Пишем решение вот тут
    // for (let i = 0; i < data.length; i++){
    //     if (typeof(data[i]) == 'string'){
    //         data[i] = data[i] + ' - done';
    //     } else {
    //         data[i] = data[i] * 2;
    //     }
    // }
    // console.log(data);
    // // Не трогаем
    // return data;
    

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // // Пишем решение вот тут
    // for (let i = data.length - 1; i >= 0; i--){
    //     result.push(data[i]);
    // }
    // console.log(result);




    // const lines = 5;
    // let result = '';
    
    // for (let i = 0; i <= lines; i++) {
    //     for (let j = 0; j < lines - i; j++) {
    //         result += " ";
    //     }
    //     for (let j = 0; j < 2 * i + 1; j++) {
    //         result += "*";
    //     }
    //     result += "\n";
    // }
    
    // console.log(result)

    // console.log(1 < 2 < 3);
    // console.log(3 > 2 > 1);


     const numberOfFilms = +prompt('How many films have you seen?', '');
    
    
 
   
    // for (let i = 0; i < 100; i++) {
    //     const numberOfFilms = +prompt('How many films have you seen?', '');
    //     if (numberOfFilms !== null && numberOfFilms !== '' && numberOfFilms <= 50){
    //         break;
    //     } else {
    //         const numberOfFilms = +prompt('How many films have you seen?', '');
    //     }
    // };

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };


console.log(numberOfFilms);



// for (let i = 0; i < 1; i++) {
//     const a = prompt('What is your last movie?', ''),
//         b = prompt('How would you rait it?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b;  
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
        
// }

// const a = prompt('What is your last movie?', ''),
//         b = prompt('How would you rait it?', '');

// switch (a, b) {
//     case a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50:
//     console.log('done');
//     personalMovieDB.movies[a] = b;
//     break;
//     default:
//         console.log('error');
        
// }


    if ( personalMovieDB.count < 10) {
        console.log('You watched too small amount of movies');
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('You are a good viewer');
    } else if ( personalMovieDB.count > 30) {
        console.log('You are a big fun of movies');
    } else {
        console.log('Error!!!');
    }



// console.log(personalMovieDB);
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('My message');
// console.log(num);


// // function calc(a, b) {
// //     return (a + b);
// // }

// // console.log(calc(4, 10));


// function ret() {
//     let num = 50;

//     return num;
// }


// const anotherNum = ret();

// console.log(anotherNum);

// let logger = function() {
//     console.log('Hi');
// };

// const calc = (a, b) => a + b;

// console.log(calc(4, 1));