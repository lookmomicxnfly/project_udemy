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








const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Какой фильм вы недавно посмотрели?', '');
const b = prompt('На сколько вы его оцените?', '');

for (let i = 0; i < 2; i++) {
    const a = prompt('Какой фильм вы недавно посмотрели?', ''),
          b = prompt('На сколько вы его оцените?', '');

    personalMovieDB.movies[a] = b;

}

console.log(personalMovieDB);
// personalMovieDB.movies[lastFilm] = rateFilm;




































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