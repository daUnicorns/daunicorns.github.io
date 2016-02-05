// grab the information on the film from the IMBD API
var getFilmDeets = function (movie) {
  var xhr = new XMLHttpRequest();
  var parsedResponse;
  var url = "http://www.omdbapi.com/?t="+ movie;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200)   {
      parsedResponse = JSON.parse(xhr.response);
    }
  };
  xhr.open("GET", url, false);
  xhr.send();
  appendFilmsToDOM(parsedResponse);
};
// grab the movie search
document.getElementById('news-movie').addEventListener('submit',function(e){
  e.preventDefault();
  document.getElementById('filmresults').innerHTML ="";
  getFilmDeets(document.querySelector('#movie').value);
});

// format the results to be appended to the DOM
  var appendFilmsToDOM = function(results) {
    // make the results into an array
    var filmresults = [];
    for(var o in results) {
      filmresults.push(results[o]);
    }
// formatting the HTML for the film results div
  document.getElementById("filmresults").innerHTML =
      "<article id = 'filmarticle'> <h1 id='title'> " +
      filmresults[0] + "</h1> <div id='poster'><img id = 'leposter' src='" + filmresults[13] + "'/></div> <div id='filmdetails'> <p id='year'><strong>Release Date :</strong> " +  filmresults[3] +
      "</p> <p id='genre'><strong>Genre :</strong> " + filmresults[5] + "</p> <p id='cast'><strong>Actors : </strong>" +
      filmresults[8] + "</p> <p id='rating'><strong>IMDB rating : </strong>"+ filmresults[15] +
       "</p> </div> <div id='plot'> <p id='plotcontent'><strong>Plot : </strong>" + filmresults[9] +
        "</p></div> </article>";
};
