/*
 * main.js
 *
 * @author L.Rosselli
 * 
 * https://www.debuggex.com/r/zY3mFptK8rBe9xYg
 */

/*
var app = {
  disallowTitleChars: /^[^<>*$#@|~`+=%\[\]\"\{\}\\\/\^]*$/,
  disallowAuthorChars: /^[^<>!@#$%&*|()+=%\[\]\"\'?,~`\{\}\\\/\^0-9]*$/,
  titleInput: document.getElementById('title'),
  authorInput: document.getElementById('author'),
  yearInput: document.getElementById('publishedYear'),
  saveBtn: document.getElementById('saveBtn'),
  star0: document.getElementById('s0'),
  star1: document.getElementById('s1'),
  star2: document.getElementById('s2'),
  star3: document.getElementById('s3'),
  star4: document.getElementById('s4'),
  stars: ['s0', 's1', 's2', 's3', 's4'],
  rating: null,
  pendingEntry: null
};
*/


function ratingsStars(event) {
  var starNumber = parseInt(event.target.id.substr(1, 1));
  for (var i = 0; i < app.stars.length; i++) {
    var htmlElement = document.getElementById(app.stars[i]);
    if (i <= starNumber) {
      htmlElement.className = 'fa fa-star';
    } else {
      htmlElement.className = 'fa fa-star-o';
    }
  }
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

function validateAll() {
  
}

var app;

(function init() {
  console.log("init");
  
  app = new App();
  app.view.inputView.title = document.getElementById('title');
  app.view.inputView.author = document.getElementById('author');
  app.view.inputView.year = document.getElementById('publishedYear');
  app.view.inputView.saveBtn = document.getElementById('saveBtn');

  
  /*
  
  app.titleInput.onchange = validateTitle;
  app.authorInput.onchange = validateAuthor;
  app.yearInput.onchange = validateYear;
  app.saveBtn.onclick = validateAll;
  
  app.star0.onclick = ratingsStars;
  app.star1.onclick = ratingsStars;
  app.star2.onclick = ratingsStars;
  app.star3.onclick = ratingsStars;
  app.star4.onclick = ratingsStars;
  
  app.pendingEntry = new Book();
  */
})();