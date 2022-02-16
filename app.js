const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count) ||
      personalMovieDB.count < 0
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?"),
        b = prompt("На сколько оцените его?");

      if (
        a != "" &&
        b != "" &&
        a != null &&
        b != null &&
        a.length < 50 &&
        b.length < 50
      ) {
        personalMovieDB.movies[a] = b;
        console.log("Done");
      } else {
        console.log("Error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
      console.log("Вы классный зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      // let genres = prompt(`Ваш любимый жанр под номером ${i}`);

      // if (genres == "" || genres == null) {
      //   console.log("Вы ввели некорректные данные или не ввели их вовсе");
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genres;
      // }

      let genres = prompt(`Введите ваши любимые жанры через запятую`);

      if (genres == "" || genres == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
