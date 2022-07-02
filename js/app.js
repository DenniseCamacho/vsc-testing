"use strict";
const movieUrl = 'https://tidy-merciful-onyx.glitch.me/movies';

fetch(movieUrl).then(function(response) {
    return response.json();
  }).then(function(data) {
    showTheData.doShowData(data);
  }).catch(function(jqXhr, status, error) {
    console.log(jqXhr);
    console.log(status);
    console.log(error);
  });

let showTheData = {
    doShowData : (data)=>{
        data.forEach((value, index, array)=>{
            let movieTitle = value.title;
            let director = value.director;
            let rating = value.rating;
            let movieGenre = value.genre;
            let movieId = value.id;
            //title, director, rating, genre, id
            let doPutInfoHere = document.getElementById('apiInformation');
        doPutInfoHere.insertAdjacentHTML('afterbegin',`
        <div id="${movieId}" class="col-6 col-md-4 col-lg-3 pb-5">
        Title: ${movieTitle}<br>
        Director: ${director}<br>
        Rating: ${rating}<br>
        Genre: ${movieGenre}<br>
        <button>Edit</button><button>Delete</button>
        </div>
  `)

        });
        
    }
}


// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(usersPost),
// };
// fetch(movieUrl, options)
//     .then( response => console.log(response) ) /* review was created successfully */
//     .catch( error => console.error(error) ); /* handle errors */
  
