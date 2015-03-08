/*
 * main.js
 *
 * @author L.Rosselli
 * 
 * https://www.debuggex.com/r/zY3mFptK8rBe9xYg
 */

var bookApp = {
  disallowTitleChars: /^[^<>*$#@|~`+=%\[\]\"\{\}\\\/\^]*$/,
  disallowAuthorChars: /^[^<>!@#$%&*|()+=%\[\]\"\'?.,~`\{\}\\\/\^0-9]*$/,
  titleInput: document.getElementById('title'),
  authorInput: document.getElementById('author'),
  yearInput: document.getElementById('publishedYear'),
  rating: null,
  pendingEntry: {
    title: undefined,
    author: '',
    year: '',
    rating: null
  }
};


function initRatingsStars() {
  
}

function validateTitle() {
  console.log(bookApp.titleInput.value);
  var tInput = bookApp.titleInput;
  var tText = bookApp.titleInput.value;  

  if (!bookApp.disallowTitleChars.test(tText)) {
    tInput.className = 'errInput';
    bookApp.pendingEntry.title = undefined;
  } else {
    tInput.className = '';
    bookApp.pendingEntry.title = tText;
  }

}

function saveAuthor() {
  console.log(bookApp.authorInput.value);
}

function saveYear() {
  console.log(bookApp.yearInput.value);
}

(function init() {
  console.log("initializing function?");
  bookApp.titleInput.onchange = validateTitle;
  bookApp.authorInput.onchange = saveAuthor;
  bookApp.yearInput.onchange = saveYear;
})();