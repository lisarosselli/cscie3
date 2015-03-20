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
    if (_title && _author && _yearPublished && _rating) {
      return true;
    } else {
      var missingFields = new Array();
      
      if (!_title) {
        missingFields.push('title');
      }
      
      if (!_author) {
        missingFields.push('author');
      }
      
      if (!_yearPublished) {
        missingFields.push('year');
      }
      
      if (!_rating) {
        missingFields.push('rating');
      }
      
      return missingFields;
    }
    
    return false;
  }
  
  var getInfo = function() {
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
    getInfo: getInfo
  }
};