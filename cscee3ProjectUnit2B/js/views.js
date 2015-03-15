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
  
  return {
    inputView: inputView
  }
  
};
