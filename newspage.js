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



var getArticals = function(topic) {
  var req = new XMLHttpRequest();
  var parsed;
  var guardianAPI = "6509f558-5d11-416c-840b-78ccfb4a0837";
  var url = "http://content.guardianapis.com/search?api-key=6509f558-5d11-416c-840b-78ccfb4a0837&q=" + topic + "&show-elements=all&show-fields=headline,thumbnail,body";

  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200)   {
      parsed = JSON.parse(req.response);
      // var results = parseQuestionData(parsed.response.results);
    }
  };
  req.open("GET", url, false);
  req.send();
  var arr = parsed.response.results;

  appendArticlesToDOM(arr);

};

document.getElementById('news-topic').addEventListener('submit',function(e){
  e.preventDefault();
  document.getElementById('results').innerHTML+="";
  document.getElementById('filmresults').innerHTML+="";
  var topic = document.querySelector('#news-topic input[type="text"]').value;
  // console.log(topic);
  getArticals(topic);
  getFilmDeets(topic);
});


var appendArticlesToDOM = function(results) {
  results.forEach(function(el) {
    document.write('<article>');
    document.write('<h2>'+ el.webTitle +'</h2>');
    // console.log(el.fields.body)
    document.write('<p>'+ el.webPublicationDate +'</p>');
    // document.write('<p>'+ el.date+'</p>');
    document.write('</article>');
  });
};


var appendFilmsToDOM = function(results) {
  console.log(results)
  var filmresults = new Array;
  for(var o in results) {
    filmresults.push(results[o]);
}

   console.log(filmresults)
   console.log(filmresults[0], filmresults[1], filmresults[8], filmresults[15], filmresults[13])

};
// var parseQuestionData = function(articles) {
//     // var parsedResults = JSON.parse(articles.results);
//
//     // parsed.items.sort(function(a,b) {
//     //     return a.owner.reputation - b.owner.reputation;
//     // });
//
//     var result = [];
//
//     JSON.parse(articles).forEach(function(el) {
//         result.push({
//             title: el.webTitle,
//             headline: el.fields.headline,
//             content: el.fields.body,
//         });
//     });
//     console.log(result);
//     return result;
// };
