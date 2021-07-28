"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?");

    while (
        numberOfFilms == "" ||
        numberOfFilms == null ||
        isNaN(numberOfFilms)
    ) {
        numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Ви переглянули досить мало фільмів");
    } else if (personalMovieDB.count <= 30) {
        alert("Ви класичний глядач");
    } else if (personalMovieDB.count > 30) {
        alert("Ви кіноман");
    } else {
        alert("Помилка");
    }
}

detectPersonalLevel();

function rememberMyFilms() {
    let i = 0;
    do {
        let a = prompt("Один з останніх переглянутих фільмів:");
        let b = prompt("Скільки балів ви йому даєте?");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
        i++;
    } while (i < 2);
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; (i <= 3); i++) {
        let genre = prompt(`Ваш улюблений жанр під номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();
