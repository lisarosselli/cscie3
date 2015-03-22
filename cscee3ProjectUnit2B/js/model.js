/* 
 * model.js
 *
 * @author L.Rosselli
 *
 */

var model = (function() {
	var instance;
	
	function init() {
		var books = [];
		var lsName = 'com.lrm.books';
		
		function addBook(value) {
			books.push(value);
			console.log('model.addBook -->');
			console.log(books);
			pushToLocalStorage();
		}
		
		function pushToLocalStorage() {
			console.log('pushToLocalStorage');
			var jsonStr = JSON.stringify(books);
			console.log(jsonStr);
			window.localStorage.setItem(lsName, jsonStr);
		}
		
		function getFromLocalStorage() {
			books = JSON.parse(window.localStorage.getItem(lsName));
		}
		
		function getBooks() {
			return books;
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
