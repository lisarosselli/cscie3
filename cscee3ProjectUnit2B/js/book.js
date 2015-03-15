/*
 * book.js
 *
 * An object to hold entry values
 *
 * @author L.Rosselli
 *
 */

function Book() {
  var _title;
  var _author;
  var _yearPublished;
  var _rating; // 0-based value
  
  var setProperty = function(property, value) {
    if (typeof property === 'string') {
      switch(property) {
      case 'title':
        _title = value;
        break;
      case 'author':
        _author = value;
        break;
      case 'yearPublished':
        _yearPublished = value;
        break;
      case 'rating':
        _rating = value;
        break;
      default:
        throw Error("Unmatched property.");
        break;
      }
    }
  }
  
  var hasFullRecord = function() {
    debugger;
    if (_title && _author && _yearPublished && _rating) {
      return true;
    }
    return false;
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
    hasFullRecord: hasFullRecord,
    getBook: getBook
  }
};