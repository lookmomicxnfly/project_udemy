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
    privat: false
};

let lastFilm = prompt('Какой фильм вы недавно посмотрели?', '');
let rateFilm = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[lastFilm] = rateFilm;

console.log(personalMovieDB);