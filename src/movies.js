const movies = require("./data");
// The `movies` array from the file `src/data.js`.

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const allDirector = movies.map((film) => {
    return film.director
  });
  return allDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const allMovies = movies.filter((film) =>
    (film.director === 'Steven Spielberg') && (film.genre.includes('Drama'))
    //return allMovies;
  );
  return allMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const allScores = movies.reduce((acc, value) => {
    if (value.score !== undefined) {
      return acc + value.score;
    }
    return acc;
  }, 0);
  let avrScore = allScores / movies.length
  return Math.round(avrScore * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((film) =>
    film.genre.includes('Drama'))
  if (dramaMovies.length === 0) {
    return 0;
  }
  const dramaScore = dramaMovies.reduce((acc, film) => {
    return acc + film.score;
  }, 0);
  let dramaMovieScoring = dramaScore / dramaMovies.length;
  return Math.round(dramaMovieScoring * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  movies.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1;
    } else {
      return -1;
    }
  });
  const result = [];
  movies.forEach(element => {
    result.push(element);
  });

  return result;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const newArray = Array.from(movies);
  newArray.sort((elem1, elem2) => {
    if (elem1.title < elem2.title) {
      return -1;
    }
    if (elem1.title > elem2.title) {
      return 1;
    }
    return 0;
  });
  return newArray.slice(0, 20).map((elem) => elem.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
return movies.map((element)=> stringToMinutes(element.duration))
}
/*
function stringToMinutes(durationstr) {
const newArr = durationstr.split(' ');
if (durationstr.length > 1) {
let totalH = newArr[0].split('h')[0];}

const horas = 0;
console.log(totalH)
;
}

stringToMinutes()

turnHoursToMinutes(movies)

*/


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
