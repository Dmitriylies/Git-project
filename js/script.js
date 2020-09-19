"use strict";

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    Movie: {},
    actors: {},
    geners: [],
    privat:  false,
};

function start(){
  numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', ''); 
  }
}
//start();


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
            lastFilmScore = +prompt('Насколько оцените его?', '');
    
        if (lastFilm != null && lastFilm != '' && lastFilm.length < 50 && lastFilmScore != null && lastFilmScore != '') {
            personalMovieDB.Movie[lastFilm] = lastFilmScore;
            console.log('done');
    
        } else {
            console.log('error');
            i--;
        }
    }
}
//rememberMyFilms();


function detectPersLvl() {
    if (personalMovieDB.count < 10) {
        confirm('просмотренно довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        confirm('просмотренно достаточно фильмов!');
    } else if (personalMovieDB.count > 30) {
        confirm('Киноман!!');
    } else {
        confirm('error!');
    }
}
//detectPersLvl();

function showMyDB(hidden) {
      if (!hidden) {
            console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGeners() {
    for(let i = 1; i <= 3; i++ ){
        personalMovieDB.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
//writeYourGeners();