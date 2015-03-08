/*
 * main.js
 *
 * @author L.Rosselli
 * 
 * https://www.debuggex.com/r/zY3mFptK8rBe9xYg
 */

var app = {
  disallowTitleChars: /^[^<>*$#@|~`+=%\[\]\"\{\}\\\/\^]*$/,
  disallowAuthorChars: /^[^<>!@#$%&*|()+=%\[\]\"\'?,~`\{\}\\\/\^0-9]*$/,
  titleInput: document.getElementById('title'),
  authorInput: document.getElementById('author'),
  yearInput: document.getElementById('publishedYear'),
  rating: null,
  pendingEntry: null
};


function initRatingsStars() {
  
}

function validateTitle() {
  console.log(app.titleInput.value);
  var tInput = app.titleInput;
  var tText = app.titleInput.value;  

  if (!app.disallowTitleChars.test(tText)) {
    tInput.className = 'errInput';
  } else {
    tInput.className = '';
    app.pendingEntry.setProperty("title", tText);//title = tText;
  }

}

function saveAuthor() {
  console.log(app.authorInput.value);
  var aInput = app.authorInput;
  var aText = app.authorInput.value;
  
  if (!app.disallowAuthorChars.test(aText)) {
    aInput.className = 'errInput';
  } else {
    aInput.className = '';
    app.pendingEntry.setProperty("author", aText);
  }
}

function saveYear() {
  console.log(app.yearInput.value);
}

(function init() {
  console.log("init");
  
  app.titleInput.onchange = validateTitle;
  app.authorInput.onchange = saveAuthor;
  app.yearInput.onchange = saveYear;
  
  app.pendingEntry = Book;
})();