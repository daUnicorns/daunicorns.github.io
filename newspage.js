var getArticals = function(api, movie) {
  var req = new XMLHttpRequest();
  var parsed;
  var guardianAPI = "6509f558-5d11-416c-840b-78ccfb4a0837";
  var url = "http://content.guardianapis.com/search?api-key=" + api + "&q=" + movie + "&show-elements=all&show-fields=headline,thumbnail,body";

  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      parsed = JSON.parse(req.response); }
  };

  req.open("GET", url, false);
  req.send();
  var arr = parsed.response.results;
  appendArticlesToDOM(arr);
};

document.getElementById('news-movie').addEventListener('submit',function(e){
  e.preventDefault();
  document.getElementById('results').innerHTML+="";
  var movie = document.querySelector('#movie').value;
  var api = document.querySelector('#api').value;
  var resultsArray = getArticals(api, movie);
});


var appendArticlesToDOM = function(results) {
  var top4 = [ results[0], results[1], results[2], results[3] ];
  top4.forEach(function(el) {
    var d = el.webPublicationDate;
    var date = d.replace('T', ' at ').replace('Z', '');
    document.getElementById("results").innerHTML += "<article> <p class='date'> Published the " + date +"</p> <h2><a href=' " + el.webUrl + " '>" +
    el.webTitle + "</a> </h2> <p class='content'>" + el.fields.body + "</p></article>";
  });
};
