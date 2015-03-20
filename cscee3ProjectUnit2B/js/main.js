/*
 * main.js
 *
 * Main entry point into the app.
 * Sets up the App object and flushes DOM elements through to it.
 *
 * @author L.Rosselli
 * 
 */

var app;

(function init() {
  console.log("init");
  
  var starsArray = new Array();
  starsArray = [
    document.getElementById('s0'),
    document.getElementById('s1'),
    document.getElementById('s2'),
    document.getElementById('s3'),
    document.getElementById('s4')
  ]
  
  app = new App();
  app.retrieveBooks();
  app.view.inputView.title = document.getElementById('title');
  app.view.inputView.author = document.getElementById('author');
  app.view.inputView.year = document.getElementById('publishedYear');
  app.view.inputView.ratingsContainer = document.getElementById('ratings_container');
  app.view.inputView.saveBtn = document.getElementById('saveBtn');
  app.view.inputView.stars = starsArray;
  
  app.view.inputView.title.onchange = app.saveTitle;
  app.view.inputView.author.onchange = app.saveAuthor;
  app.view.inputView.year.onchange = app.saveYear;
  app.view.inputView.saveBtn.onclick = app.saveBook;
  app.setupStarEvents();
})();