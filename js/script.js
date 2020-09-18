'use strict';
 const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    Movie: {},
    actors: {},
    geners: [],
    privat: false,
};

if (personalMovieDB.count < 10){
    confirm('просмотренно довольно мало фильмов!');    
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    confirm('просмотренно достаточно фильмов!');    
}else if ( personalMovieDB.count > 30 ) {
    confirm('Киноман!!');    
}else {
    confirm('error!')
}


for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
          lastFilmScore = +prompt('Насколько оцените его?', ''); 

          if ( lastFilm != null && lastFilm != '' && lastFilm.length < 50 && lastFilmScore != null && lastFilmScore != '') {
            personalMovieDB.Movie[lastFilm] = lastFilmScore;
            console.log('done');
            
          }else{
            console.log('error');
            i--;
          }
          console.log(personalMovieDB);
}

