var getFilmDeets = function (topic) {
  var xhr = new XMLHttpRequest();
  var parsedResponse;
  var url = "http://www.omdbapi.com/?t="+ topic;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200)   {
      parsedResponse = JSON.parse(xhr.response);
      // var results = parseQuestionData(parsed.response.results);
    }
  };
  xhr.open("GET", url, false);
  xhr.send();
  var array = parsedResponse;
  // console.log(array);
  appendFilmsToDOM(array);
};

document.getElementById('news-movie').addEventListener('submit',function(e){
  e.preventDefault();
  document.getElementById('filmresults').innerHTML+="";
  var topic = document.querySelector('#news-movie input[type="text"]').value;
  // console.log(topic);
  getFilmDeets(topic);
});


  var appendFilmsToDOM = function(results) {
    // console.log(results);
    var filmresults = new Array;
    for(var o in results) {
      filmresults.push(results[o]);
    }

    document.getElementById("filmresults").innerHTML =
    "<article id = 'filmarticle'> <div id='poster'><img id = 'leposter' src='http://vignette3.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/a9/Adventure-time-dance-5046_preview.gif/revision/latest?cb=20110617014146'/></div> <div id='filmdetails'> <h1 id='title'>" + filmresults[0] + "</h1> <h2 id='year'>" +  filmresults[1] + "</h2> <p id='cast'><strong>Actors : </strong>" + filmresults[8] + "</p> <p id='rating'><strong>IMDB rating : </strong>"+ filmresults[15] + "</p> </div> <div id='plot'> <p id='plotcontent'><strong>Plot : </strong>" + filmresults[9] + "</p></div> </article>";


    // console.log(filmresults);
    console.log(filmresults[0], filmresults[1], filmresults[8], filmresults[15], filmresults[13]);

  };
