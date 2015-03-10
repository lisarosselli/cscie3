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
  var tInput = app.titleInput;
  var tText = app.titleInput.value;  

  if (!app.disallowTitleChars.test(tText)) {
    tInput.className = 'errInput';
  } else {
    tInput.className = '';
    app.pendingEntry.setProperty('title', tText);//title = tText;
  }

}

function validateAuthor() {
  var aInput = app.authorInput;
  var aText = aInput.value;
  
  if (!app.disallowAuthorChars.test(aText)) {
    aInput.className = 'errInput';
  } else {
    aInput.className = '';
    app.pendingEntry.setProperty('author', aText);
  }
}

function validateYear() {
  var yInput = app.yearInput;
  var year = yInput.value;
  year = parseInt(year);
  
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  debugger;
  if (!isNaN(year)) {
    if (year >= 0 && year <= currentYear) {
      yInput.className = '';
      app.pendingEntry.setProperty('yearPublished', year);
    } else {
      yInput.className = 'errInput';
    }
  } else {
    yInput.className = 'errInput';
  }
}

(function init() {
  console.log("init");
  
  app.titleInput.onchange = validateTitle;
  app.authorInput.onchange = validateAuthor;
  app.yearInput.onchange = validateYear;
  
  app.pendingEntry = Book;
})();