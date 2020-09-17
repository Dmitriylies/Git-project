'use strict';

// <first-lesson>-----------/

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
      lastFilmScore = +prompt('Насколько оцените его?', ''),
      lastFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
      lastFilmScore2 = +prompt('Насколько оцените его?', '');

const personalMovieDB = {
    count: numberOfFilms,
    Movie: {},
    actors: {},
    geners: [],
    privat: false,
};

personalMovieDB.Movie[lastFilm] = lastFilmScore; 
personalMovieDB.Movie[lastFilm2] = lastFilmScore2; 

console.log( personalMovieDB );

// </first-lesson>-----------/

// <second-lesson>-----------/

    if ( 4 == 9 ) {
        console.log('ok!');
    }else {
        console.log('not ok!');
        
    }

// </second-lesson>-----------/

const num = 50;

( num == 50 ) ? console.log('ok!') : console.log("you're wrong");

switch(num) {

    case 49: 
        console.log('неверно!');
        break;
    case 22:
        console.log('неверно!');
        break;    
    case 50:
        console.log('Правильно!');
        break;    
    default: 
        console.log('в друной раз!');
        break;   
    }