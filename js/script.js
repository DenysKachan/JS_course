"use strict";

let numberOfFilms = prompt("Скільки фільмів ви вже переглянули?");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

if (personalMovieDB.count < 10) {
    alert("Ви переглянули досить мало фільмів");
} else if (personalMovieDB.count <= 30) {
    alert("Ви класичний глядач");
} else if (personalMovieDB.count > 30) {
    alert("Ви кіноман");
} else {
    alert("Помилка");
}

let a, b;
let i = 0;
do {
    a = prompt("Один з останніх переглянутих фільмів:");
    b = prompt("Скільки балів ви йому даєте?");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
    i++;
} while (i < 2);

console.log(personalMovieDB);
