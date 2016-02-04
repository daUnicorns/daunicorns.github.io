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
  console.log(array);
  appendFilmsToDOM(array);
};

  document.getElementById('filmresults').innerHTML+="";
  var topic = document.querySelector('#news-topic input[type="text"]').value;
  // console.log(topic);
  getArticals(topic);
  getFilmDeets(topic);



var appendFilmsToDOM = function(results) {
  console.log(results);
  var filmresults = new Array;
  for(var o in results) {
    filmresults.push(results[o]);
}

   console.log(filmresults);
   console.log(filmresults[0], filmresults[1], filmresults[8], filmresults[15], filmresults[13]);

};
