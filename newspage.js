var getUnanswered = function(topic) {
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
  appendQuestionResultsToDOM(arr);
};


document.getElementById('news-topic').addEventListener('submit',function(e){
  e.preventDefault();
  document.getElementById('results').innerHTML+="";
  var topic = document.querySelector('#news-topic input[type="text"]').value;
  console.log(topic);
  var resultsArray = getUnanswered(topic);
});


var appendQuestionResultsToDOM = function(results) {
  results.forEach(function(el) {
    document.write('<article>');
    document.write('<h2>'+ el.webTitle +'</h2>');
    // document.write('<p>'+ el.content+'</p>');
    // document.write('<p>'+ el.date+'</p>');
    document.write('</article>');
    // twitter
  });
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
