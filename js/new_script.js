"use strict";

// const usdCurr = 42;
// const eurCurr = 41;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }


// const res = convert(500, usdCurr);
// promotion(res);


// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return;
//     }
// }


// test();


// function doNothing() {};
// console.log(doNothing() === undefined);

// function returnNeighboringNumbers(int) {
//     const arr = [];
//     arr.push(int - 1);
//     arr.push(int);
//     arr.push(int + 1);
//     return arr;
    
// }
// console.log(returnNeighboringNumbers(4));

// // Место для третьей задачи
// function getMathResult(num, mult) {
//     let str = '';
   
    
//     if (typeof mult === 'number' && mult > 0) {
//     for (let i = 1; i <= mult; i++) {
//         str += i * num;
//         str += '---';
//     }
    
//     } else {
//         return str += num;
//     }
//     return str;
//     // if (str.length > 3) {
//     //     return str.slice(0, -3);
//     // } else {
//     //     return str;
//     // }
// }

// // function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// console.log(getMathResult(22, 5));


/* const str = "test";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("Fruit"));

const logg = "Hello World";

console.log(logg.slice(6));

console.log(logg.substring());

console.log(logg.substr());

const num = 12.2;

console.log(Math.round(num));

const test = "12.2px";

console.log(parseInt(test));

console.log(parseFloat(test)); */

/* or (let i = 0; i < 100; i++) {
        const numberOfFilms = +prompt('How many films have you seen?', '');
         if (numberOfFilms !== null && numberOfFilms !== '' && numberOfFilms <= 50){
          break;
     } else {
           const numberOfFilms = +prompt('How many films have you seen?', '');
        }
  }; */
/*   let numberOfFilms;

  function start() {
    numberOfFilms = +prompt('How many films have you seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you seen?', '');
    }
  }

  start();

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    function showMyDB () {
        if (personalMovieDB.privat === false) {
            return console.log(personalMovieDB);
        }
    }
    

    function writeYourGenres () {
        for (let i = 1; i <= 3; i++) {
            const question = prompt(`Your favorite genre by number ${i}?`);
            personalMovieDB.genres.push(question);
        }
    }

console.log(numberOfFilms);


function rememberMyFilms() {
  for (let i = 0; i < 1; i++) {
    const a = prompt('What is your last movie?', ''),
        b = prompt('How would you rait it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;  
        console.log('done');
     } else {
         console.log('error');
        i--;
    }
        
  }
}
 rememberMyFilms();




function detectPersonalLevel() {
    if ( personalMovieDB.count < 10) {
        console.log('You watched too small amount of movies');
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('You are a good viewer');
    } else if ( personalMovieDB.count > 30) {
        console.log('You are a big fun of movies');
    } else {
        console.log('Error!!!');
    }
}
detectPersonalLevel();
writeYourGenres();
showMyDB();


function calculateVolumeAndArea(int) {
    if (isNaN(int) || int < 0 || !Number.isInteger(int)) {
        return 'При вычислении произошла ошибка';
    }
    
    return `Объем куба: ${int * int * int}, площадь всей поверхности: ${(int * int) * 6}`;
}

console.log(calculateVolumeAndArea('-5'));

function getCoupeNumber(room) {
    if (room > 0 && room <= 4 && Number.isInteger(room)) {
        return 1;
    } else if (room > 4 && room <= 8 && Number.isInteger(room)) {
        return 2; 
    } else if (room > 8 && room <= 12 && Number.isInteger(room)) {
        return 3; 
    } else if (room > 12 && room <= 16 && Number.isInteger(room)) {
        return 4; 
    } else if (room > 16 && room <= 20 && Number.isInteger(room)) {
        return 5; 
    } else if (room > 20 && room <= 24 && Number.isInteger(room)) {
        return 6; 
    } else if (room > 24 && room <= 28 && Number.isInteger(room)) {
        return 7; 
    } else if (room > 28 && room <= 32 && Number.isInteger(room)) {
        return 8; 
    } else if (room > 32 && room <= 36 && Number.isInteger(room)) {
        return 9; 
    } else if (room == 0 || room > 36) {
        return "Таких мест в вагоне не существует"; 
    } else if (isNaN(room)) {
        return "Ошибка. Проверьте правильность введенного номера места"; 
    } else if (!Number.isInteger(room)) {
        return "Ошибка. Проверьте правильность введенного номера места"; 
    } else if (room < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    
}

console.log(getCoupeNumber(2.2)); */

function getTimeFromMinutes(minutes) {

    if (minutes  < 0 || !Number.isInteger(minutes)) {
        return "Ошибка, проверьте данные";
    }

    let float = parseInt(minutes / 60);
    let min = minutes - (float * 60);
    if (float == 0 || float == 5 || float == 6 || float == 7 || float == 8 || float == 9 || float == 11) {
        return `Это ${float} часов и ${min} минут`;
    } else if (float == 1) {
        return `Это ${float} час и ${min} минут`;
    } else if (float == 2 || float == 3 || float == 4) {
        return `Это ${float} часа и ${min} минут`;
    }

}

console.log(getTimeFromMinutes(50.5));


function findMaxNumber(num1, num2, num3, num4) {
    if (num1 < 4 || typeof num1 === 'string' || isNaN(num1) || num2 < 4 || typeof num2 === 'string' || isNaN(num2) || num3 < 4 || typeof num3 === 'string' || isNaN(num3) || num4 < 4 || typeof num4 === 'string' || isNaN(num4)) {
        return 0;
    } 
        
        return Math.max(num1, num2, num3, num4); 
    
}

console.log(findMaxNumber(120, '44', 33, 11));


// function fib(arg) {
//     let arr = [0];
//     if (arg === 0 || typeof arg !== 'number') {
//         return "";
//     } else if (arg === 1) {
//         return "0";
//     }
//     let prev = 0, next = 1;

//     for (let i = 0; i < arg ; i++) {
//         let temp = next;
//         next = prev + next;
//         prev = temp;
    
//     }
//     return arr.join(",");
// }

// console.log(fib(3));
function fib(arg) {
    if (arg === 0 || typeof arg !== 'number' || !Number.isInteger(arg)) {
        return "";
    } else if (arg === 1) {
        return "0";
    }
    
    let arr = [0];
    let prev = 0, next = 1;

for (let i = 0; i < 5 - 1 ; i++) {
    let temp = next;
    arr.push(temp);
    next = prev + next;
    prev = temp;
    console.log(temp);
}

 return arr.join(" ");
}
let aw = 2;