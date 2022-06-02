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
if (movies.length === 0){
  return 0;
}
const allScores = movies.reduce((acc,value) => {
  return acc + value.score;
}, 0);
let avrScore = allScores / movies.lenght
return Math.round(avrScore*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
const dramaMovies = movies.filter((film) => 
  film.genre.includes('Drama'))
const dramaScore = dramaMovies.reduce((acc,film) => {
  return acc + film.score;
}, 0);
 let dramaMovieScoring = dramaScore / dramaMovies.lenght;
  return dramaMovieScoring;
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
movies.sort ((elem1,elem2) => {
if (elem1.year > elem2.year) {
  return -1;
}
if (elem1.year < elem2.year) {
  return 1;
}
  return 0;
}
)
return movies.sort;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
movies.sort ((elem1,elem2) => {
  if (elem1.title > elem2.title) {
    return -1;
  }
  if (elem1.title < elem2.title) {
    return 1;
  }
    return 0;
  })
  return movies.sort;
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
