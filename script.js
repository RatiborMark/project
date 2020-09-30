
/*const obj = {
    name: 'Smit',
    age: 20,
    isMarried: false
};
*/

/*let colour = prompt("Умножайте на два");
 console.log(colour + 2);
 */

 //const answers = [];
/*
 answers[0] = prompt("Как ваше имя?", '');
 answers[1] = prompt("Как ваша фамилия?", '');
 answers[2] = prompt("Как ваше отчество?", '');

 document.write(answers);
 */

//  Стркоковая интерполяция
/*let question = prompt("Как Вас зовут?");
 alert(`Здрайствуйте дорогой,${question}`);
*/

/*let incr = 10,
    decr = 10;

    console.log(++incr);
    console.log(--decr);
*/
/*let question = +prompt("Уменшаю на один)))");

console.log(--question);
*/

/*let isChecked = false,
    isClose = false;

    console.log(isChecked || !isClose);
*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { 
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
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

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilms = prompt("Один из последних Ваших просмотреных фильмов?", ""),
              appraisal = prompt("На сколько можете оценить его?", "");

         if (lastFilms != null && appraisal != null && lastFilms != '' && appraisal != '' && lastFilms.length < 50) {
             personalMovieDB.movies[lastFilms] = appraisal;
             console.log("done");
         } else {
             console.log("error");
             i--;
         }
    }
}

  //rememberMyFilms();


 function detectPersonaLevel() {
       if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка!!!');
      }  
    }

    //detectPersonaLevel();

    function showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }

    showMyDB(personalMovieDB.privat);

    function writeYourGenres () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером${ i}`);
        }
    }

    writeYourGenres();

   // console.log(personalMovieDB);







