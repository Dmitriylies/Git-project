"use strict";

let numberOfFilms;
const personalMovieDB = {
    count: 0,
    Movie: {},
    actors: {},
    geners: [],
    privat:  true,
    start: function start(){
        this.count = +prompt('сколько фильмов вы уже посмотрели?', '');
      
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            this.count = +prompt('сколько фильмов вы уже посмотрели?', ''); 
        }
    },
    detectPersLvl: function detectPersLvl() {
        if (this.count < 10) {
            confirm('просмотренно довольно мало фильмов!');
        } else if (this.count >= 10 && this.count < 30) {
            confirm('просмотренно достаточно фильмов!');
        } else if (this.count > 30) {
            confirm('Киноман!!');
        } else {
            confirm('error!');
        }
    },
    rememberMyFilms: function rememberMyFilms() {
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
    },
    toggleVisibleMyDB: function toggleVisibleMyDB() {
        if(this.privat) {
            this.privat = false;
        }else{
            this.privat = true;
        }
    },
    showMyDB: function showMyDB() {
        if (!this.privat) {
              console.log(personalMovieDB);
      }
    },
    writeYourGeners: function writeYourGeners() {
        for(let i = 1; i <= 3; i++ ){
            this.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            if( this.geners[i - 1] == null || this.geners[i - 1] == '') {
                i--;
            }
        }
        this.geners.forEach (function(item, i) {
            console.log(`любимый жанр №${i + 1} это ${item}`);
        });
    },
};

//personalMovieDB.start();
//personalMovieDB.detectPersLvl();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB(personalMovieDB.privat);
//personalMovieDB.writeYourGeners();

