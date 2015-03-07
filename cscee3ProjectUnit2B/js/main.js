/*
 * main.js
 *
 * @author L.Rosselli
 * 
 * https://www.debuggex.com/r/zY3mFptK8rBe9xYg
 */

var bookApp = {
  disallowChars: /^[^<>*$#@+=%\[\]\"\{\}\\\/\^]*$/,
  titleInput: document.getElementById('title'),
  authorInput: document.getElementById('author'),
  yearInput: document.getElementById('publishedYear'),
  rating: null
};


function initRatingsStars() {
  
}

function saveTitle() {
  console.log(bookApp.titleInput.value);
}

function saveAuthor() {
  console.log(bookApp.authorInput.value);
}

function saveYear() {
  console.log(bookApp.yearInput.value);
}

function init() {
  bookApp.titleInput.onchange = saveTitle;
  bookApp.authorInput.onchange = saveAuthor;
  bookApp.yearInput.onchange = saveYear;
}

(function() {
  console.log("initializing function?");
  init();
})();