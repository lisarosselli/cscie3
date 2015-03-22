/* 
 * model.js
 *
 * model is implemented as a singleton
 *
 * @author L.Rosselli
 *
 */

var model = (function() {
	var instance;
	
	function init() {
		console.log("model.init");
		var _books = new Array();
		var _lsName = 'com.lrm.books';
		
		function addBook(value) {
			_books.push(value);
			pushToLocalStorage();
		}
		
		function pushToLocalStorage() {
			var jsonStr = JSON.stringify(_books);
			window.localStorage.setItem(_lsName, jsonStr);
		}
		
		function getFromLocalStorage() {
			_books = JSON.parse(window.localStorage.getItem(_lsName));
			if (_books == null || _books == undefined) {
				_books = new Array();
			}
		}
		
		function getBooks() {
			return _books;
		}
		
		function clearLocalStorage() {
			window.localStorage.clear();
		}
		
		return {
			addBook: addBook,
			getBooks: getBooks,
			getFromLocalStorage: getFromLocalStorage,
			clearLocalStorage: clearLocalStorage
		}
	};
	
	return {
		getInstance: function() {
			if (!instance) {
				instance = init();
			}
			return instance;
		}
	};
})();
