var Book = (function () {
  var _title = "Harry Potter";
  var _author;
  var _yearPublished;
  var _rating;
  
  var setProperty = function(prop, value) {
    if (typeof prop === 'string') {
      switch(prop) {
        case "title":
          _title = value;
          break;
        case "author":
          _author = value;
          break;
        case "yearPublished":
          _yearPublished = value;
          break;
        case "rating":
          _rating = value;
          break;
      }
    }
  }
  
  var getBook = function() {
    var obj = {
      title: _title,
      author: _author,
      yearPublished: _yearPublished,
      rating: _rating
    }
    return obj;
  }
  
  return {
    setProperty: setProperty,
    getBook: getBook,
  }
})();