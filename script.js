"use strict";

// alert('Hello');

// let answer = prompt("Yeah?", "Yeah");
// console.log(answer);

// let answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(answers);

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 === 8);



// const isChecked = false,
//       isClose = true;

// console.log(isChecked && isClose);








let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Какой фильм вы недавно посмотрели?', ''),
              b = prompt('На сколько вы его оцените?', '');
        
        if (a !== 'null', b !== 'null' && a !== '', b !== '' && a.length < 50, b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done!');
        } else {
            i--;
            console.log('error');
        }
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        return console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}


writeYourGenres();




// const usdCurr = 28;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);


// // Первая задача

// function sayHello(name) {
//     return('Привет, ' + name);
// }

// console.log(sayHello('Антон!'));

// // Вторая задача

// function returnNeighboringNumbers(num) {
//     if (typeof(num) === 'number') {
//         let arr = [];
//         arr[0] = num - 1;
//         arr[1] = num;
//         arr[2] = num + 1;
//         return arr;
//     }
// }

// console.log(returnNeighboringNumbers(8));

// // Третья задача

// function getMathResult(base, baseTimes) {
//     let result = '';
//     if (typeof(baseTimes) !== 'number' || baseTimes <= 0) {
//         return base;
//     } else {
//         for (let i = 1; i <= baseTimes; i++) {
//             if (i == baseTimes) {
//                 result += (base * i);
//             } else {
//                 result += (base * i) + '---';
//             }
//         }
//         return result;
//     }
// }

// console.log(getMathResult(3, 4));






























// let numbers = 5;

// for (let i = 5; i < 11; i++) {
//     console.log(numbers);
//     numbers++;
// }

// let numbers = 20;

// for (let i = 20; i > 9; i--) {
//     console.log(numbers);
//     numbers--;
//     if (numbers === 13) {
//         break;
//     }
// }

// let even = 2;

// for (let i = 2; i < 11; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// let i = 2;

// while (i < 17) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }
     
// let arr = []

// for (let i = 4; i < 10; i++) {
//     arr[i] = i + 1;
// }

// console.log(arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     }
//     else {
//         data[i] += ' - done'
//     }
// }

// console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
// }

// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {          \\ 0 1 2 3 4 5
//     for (let j = 0; j < lines - i; j++) {   \\ 0 1 2 3 4
//         result += " "; 
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {   \\ 0 1 2 3 4 5 6
//         result += "*";
//     }
//     result += "\n";
// }

// '     *'
// '    ***'
// '   *****'
// '  *******'




