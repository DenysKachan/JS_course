"use strict";

let numberOfFilms = 10;
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let a = "Dacia",
    b = 5,
    c = "Logan",
    d = 6;

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
