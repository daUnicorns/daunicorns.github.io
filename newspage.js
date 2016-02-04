var getArticals = function(api, topic) {
  var req = new XMLHttpRequest();
  var parsed;
  var guardianAPI = "6509f558-5d11-416c-840b-78ccfb4a0837";
  var url = "http://content.guardianapis.com/search?api-key=" + api + "&q=" + topic + "&show-elements=all&show-fields=headline,thumbnail,body";

  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      parsed = JSON.parse(req.response); }
  };

  req.open("GET", url, false);
  req.send();
  var arr = parsed.response.results;
  appendArticlesToDOM(arr);
};

document.getElementById('news-topic').addEventListener('submit',function(e){
  e.preventDefault();
  document.getElementById('results').innerHTML+="";
  var topic = document.querySelector('#topic').value;
  var api = document.querySelector('#api').value;
  var resultsArray = getArticals(api, topic);
});


var appendArticlesToDOM = function(results) {
  results.forEach(function(el) {
    var d = el.webPublicationDate;
    var date = d.replace('T', ' at ').replace('Z', '');
    document.getElementById("results").innerHTML += "<article> <h2><a href=' " + el.webUrl + " '>" +
    el.webTitle + "</a> </h2> <p class='date'> Published the " + date +"</p> <p class='content'>" + el.fields.body + "</p></article>";
  });
};
