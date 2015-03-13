function App() {
  var _disallowTitleChars = /^[^<>*$#@|~`+=%\[\]\"\{\}\\\/\^]*$/;
  var _disallowAuthorChars = /^[^<>!@#$%&*|()+=%\[\]\"\'?,~`\{\}\\\/\^0-9]*$/;
  
  // view vars, should be put in a different object?
  var _titleInput;
  var _authorInput;
  var _yearInput;
  var _saveBtn;
  var _stars;
  
  // hold a reference to the book we want to save
  var _pendingEntry;
  
  // setters
  
  var a = {
    set input(value) {
      debugger;
      console.log('setting as '+value);
    },
    get input() {
      debugger;
      return "got it";
    }
  }
  
  var setTitleInput = function(value) {
    _titleInput = value;
  }
  
  var setAuthorInput = function(value) {
    _authorInput = value;
  }
  
  var setYearInput = function(value) {
    _yearInput = value;
  }
  
  // getters
  var titleInput = function() {
    return _titleInput;
  }
  
  var authorInput = function() {
    return _authorInput;
  }
  
  var yearInput = function() {
    return _yearInput;
  }
  
  var saveTitle = function(value) {
    console.log('saveTitle'); 
  }
  
  var saveAuthor = function(value) {
    console.log('saveAuthor');
  }
  
  var saveYear = function(value) {
    console.log('saveYear');
  }
  
  var getPendingEntry = function() {
    return _pendingEntry;
  }
  
  return {
    a: a
  }
};


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