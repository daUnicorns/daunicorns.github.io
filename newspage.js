
var parseQuestionData = function(questions) {
    // JSON.parse(questions).items.sort(function(a,b) {
    //     return a.owner.reputation - b.owner.reputation;
    // });

    var result = [];

    JSON.parse(questions).items.forEach(function(el) {
        result.push({
            title: el.title,
            link: el.link,
            creation: el.creation_date,
            name: el.owner.display_name,
            rep: el.owner.reputation,
        });
    });
    console.log(result);
    return result;
};

var appendQuestionResultsToDOM = function(results) {
  results.forEach(function(el) {
    document.write('<article>');
    document.write('<h2>'+ el.title +'</h2>');
    document.write('<p>'+ el.content+'</p>');
    document.write('<p>'+ el.date+'</p>');
    document.write('</article>');
    // twitter
  });
};



var getUnanswered = function(topic) {
  var request = new XMLHttpRequest();
  var url = "https://api.stackexchange.com/2.2/questions/unanswered?order=desc&sort=activity&tagged=" + topic + "&site=stackoverflow";
  request.open("GET", url, false);
  request.send();

  var results = parseQuestionData(request.response);
  appendQuestionResultsToDOM(results);
};


document.getElementById('news-topic').addEventListener('submit',function(e){
	  e.preventDefault();
    document.getElementById('results').innerHTML+="";
    var topic = document.querySelector('#news-topic input[type="text"]').value;
    console.log(topic);
    getUnanswered(topic);
});

var guardianAPI = "";
var guardianSearch = "";

var guardianURL = "http://content.guardianapis.com/search?" + guardianAPI + "&q" + guardianSearch + "&show-elements=all&show-fields=headline,thumbnail,body";
