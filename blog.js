
/* This is a blog object for storing blog information */
function blogobject(title,date,content){
    this.title = title;
    this.date = date;
    this.content = content;
}
/* This function will when finished extract title, date and content automatically form a file.
For the time being the title,date and content have been manually written below.
What this currently does is loop through the content and write it to the page using html
*/
function blogcontent(){
  title = ['blog1','blog2','blog3','blog4','blog5'];
  date = ['21/01/16','22/02/16','23/02/16','24/02/16','25/02/16'];
  content = ['Bacon ipsum dolor amet tri-tip ribeye rump salami, jowl shank short ribs meatball chicken. Frankfurter kevin kielbasa, capicola spare ribs corned beef pork belly sausage cupim short loin pork ham hock chicken pork loin.',
'Bacon ipsum dolor amet tri-tip ribeye rump salami, jowl shank short ribs meatball chicken. Frankfurter kevin kielbasa, capicola spare ribs corned beef pork belly sausage cupim short loin pork ham hock chicken pork loin.',
'Bacon ipsum dolor amet tri-tip ribeye rump salami, jowl shank short ribs meatball chicken. Frankfurter kevin kielbasa, capicola spare ribs corned beef pork belly sausage cupim short loin pork ham hock chicken pork loin.',
'Bacon ipsum dolor amet tri-tip ribeye rump salami, jowl shank short ribs meatball chicken. Frankfurter kevin kielbasa, capicola spare ribs corned beef pork belly sausage cupim short loin pork ham hock chicken pork loin.',
'Bacon ipsum dolor amet tri-tip ribeye rump salami, jowl shank short ribs meatball chicken. Frankfurter kevin kielbasa, capicola spare ribs corned beef pork belly sausage cupim short loin pork ham hock chicken pork loin.'];
  blogs = [];
  for (var i=0; i<title.length; i++){
    blogs[i] = new blogobject(title[i],date[i],content[i]);
  }
  for (i=0; i<blogs.length; i++){
    document.write('<article>');
    document.write('<h2>'+blogs[i].title+'</h2>');
    document.write('<p>'+blogs[i].content+'</p>');
    document.write('<p>'+blogs[i].date+'</p>');
    document.write('</article>');
  }
}
