
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

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

 let personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors: {},
     genres: [],
     private: false,
 };
  
  const lastFilms = prompt("Один из последних Ваших просмотреных фильмов?", ""),
        appraisal = prompt("На сколько можете оценить его?", ""),
        lastFilms_2 = prompt("Один из последних Ваших просмотреных фильмов?", ""),
        appraisal_2 = prompt("На сколько можете оценить его?", "");
  
  personalMovieDB.movies[lastFilms] = appraisal;
  personalMovieDB.movies[lastFilms_2] = appraisal_2;

    console.log(personalMovieDB);





