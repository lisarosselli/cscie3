/*
 * View.js
 *
 * Keeping view items separate in this app
 * @author L.Rosselli
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
    }
  }
  
  return {
    inputView: inputView
  }
  
};
