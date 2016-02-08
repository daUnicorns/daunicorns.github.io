var getArticals = function(api, movie) {

  var req = new XMLHttpRequest();
  var parsed;
  var url = "http://content.guardianapis.com/search?api-key=" + api + "&q=" + movie + "&show-elements=all&show-fields=headline,thumbnail,body";

  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      parsed = JSON.parse(req.response); }
      var arr = parsed.response.results;

      appendArticlesToDOM(arr);
  };

  req.open("GET", url);
  req.send();

};

document.getElementById('news-movie').addEventListener('submit',function(e){
  e.preventDefault();
  document.getElementById('results').innerHTML ="";
  var movie = document.querySelector('#movie').value;
  var api = document.querySelector('#api').value;
  var resultsArray = getArticals(api, movie);
});


var appendArticlesToDOM = function(results) {
  var top4 = [ results[0], results[1], results[2], results[3] ];
  top4.forEach(function(el) {
    var uglyDate = el.webPublicationDate;
    var date = uglyDate.replace('T', ' at ').replace('Z', '');
    document.getElementById("results").innerHTML += "<article> <p class='date'> Published the " + date +"</p> <h2 class='article-title'><a target = '_blank' href=' " + el.webUrl + " '>" +
    el.webTitle + "</a> </h2> <div class='scroll'>" + el.fields.body + "</div></article>";
  });
};
