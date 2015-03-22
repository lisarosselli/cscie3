/*
 * View.js
 *
 * Keeping view items separate here.
 * Get at them through app.view...
 *
 * @author L.Rosselli
 *
 */

function View() {
  var _titleInput;
  var _authorInput;
  var _yearInput;
  var _saveBtn;
  var _stars;
  var _ratingsContainer;
	var _orderedList;
  
  // input view getters and setters
  var inputView = {
    set title(value) {
      _titleInput = (typeof value === 'object') ? value : undefined;
    },
    get title() {
      return _titleInput;
    },
    set author(value) {
      _authorInput = (typeof value === 'object') ? value : undefined;
    },
    get author() {
      return _authorInput;
    },
    set year(value) {
      _yearInput = (typeof value === 'object') ? value : undefined;
    },
    get year() {
      return _yearInput;
    },
    set ratingsContainer(value) {
      _ratingsContainer = (typeof value === 'object') ? value : undefined;
    },
    get ratingsContainer() {
      return _ratingsContainer;
    },
    set saveBtn(value) {
      _saveBtn = (typeof value === 'object') ? value : undefined;
    },
    get saveBtn() {
      return _saveBtn;
    },
    set stars(value) {
      _stars = (value instanceof Array) ? value : undefined;
    }, 
    get stars() {
      return _stars;
    },
    clearError: function clearError(element) {
      console.log('clearError');
      element.className = '';
    },
    showError: function showError(element) {
      console.log('showError');
      element.className = 'errInput';
    },
    updateStars: function updateStars(rating) {
      if (_stars) {
        for (var i = 0; i < _stars.length; i++) {
          var htmlElement = _stars[i];
          if (i <= rating) {
            htmlElement.className = 'fa fa-star';
          } else {
            htmlElement.className = 'fa fa-star-o';
          }
        }
      }
    }
  }
  
  var outputView = {
    set orderedList(value) {
    	_orderedList = (typeof value === 'object') ? value : undefined;
    },
		get orderedList() {
			return _orderedList;
		},
		addBookToList: function addBookToList(value, index, array) {
			var htmlStr = '<li>';
			htmlStr += '<b>' + value.title + '</b> by ';
			htmlStr += value.author + ', published in ';
			htmlStr += value.yearPublished + '. ';
			
			for (var i = 0; i < 5; i++) {
				var starClass = (i <= value.rating) ? 'fa fa-star' : 'fa fa-star-o';
				htmlStr += '<i class=\'' + starClass +'\'>';
			}
			
			htmlStr += '</li>';
			_orderedList.innerHTML += htmlStr;
		}
  }
  
  return {
    inputView: inputView,
    outputView: outputView
  }
  
};
