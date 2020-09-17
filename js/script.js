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
