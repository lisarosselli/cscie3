/*
 * app.js
 *
 * App object acting sort of like a controller
 *
 * @author L.Rosselli
 *
 * Found this site helpful: https://www.debuggex.com/r/zY3mFptK8rBe9xYg
 * for regular expression understanding.
 *
 */

function App() {
  var _disallowTitleChars = /^[^<>*$#@|~`+=%\[\]\"\{\}\\\/\^]*$/;
  var _disallowAuthorChars = /^[^<>!@#$%&*|()+=%\[\]\"\'?,~`\{\}\\\/\^0-9]*$/;
  var _pendingEntry;
	
  var view = new View();

  // controller-type actions
  var saveTitle = function(event) {
    console.log('saveTitle ' + event.target.value); 
    var userInput = event.target.value;
    if (!_disallowTitleChars.test(userInput)) {
      view.inputView.showError(view.inputView.title);
    } else {
      getPendingEntry().setProperty('title', userInput);
      view.inputView.clearError(view.inputView.title);
    }
  }
  
  var saveAuthor = function(event) {
    console.log('saveAuthor ' + event.target.value);
    var userInput = event.target.value;
    if (!_disallowAuthorChars.test(userInput)) {
      view.inputView.showError(view.inputView.author);
    } else {
      getPendingEntry().setProperty('author', userInput);
      view.inputView.clearError(view.inputView.author);
    }
  }
  
  var saveYear = function(event) {
    console.log('saveYear ' + event.target.value);
    
    var userInput = parseInt(event.target.value);
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    
    if(!isNaN(userInput)) {
      if (userInput >= 0 && userInput <= currentYear) {
        getPendingEntry().setProperty('yearPublished', userInput);
        view.inputView.clearError(view.inputView.year);
      } else {
        view.inputView.showError(view.inputView.year);
      }
    } else {
      view.inputView.showError(view.inputView.year);
    }
  }
  
  var saveBook = function(event) {
    // the expected return is an array of missing/invalid DOM elements
    var entryStatus = getPendingEntry().hasFullRecord();

    if (entryStatus instanceof Array) {
      for (var i = 0; i < entryStatus.length; i++) {
				var domElement = view.inputView[entryStatus[i]];
        domElement.className = 'errInput';
      }
    } else if (entryStatus) {
			// all previous red outlines will be cleared by here 
			// except for the ratings red outline
			// TODO: remove ratingsContainer red outline here
			
      model.getInstance().addBook(getPendingEntry().getInfo());
			var bookObjsArray = model.getInstance().getBooks();
			view.outputView.addBookToList(
					bookObjsArray[bookObjsArray.length - 1],
					bookObjsArray.length - 1,
					bookObjsArray
			);
    } else {
      throw Error('entryStatus is of an unexpected value.')
    }
  }
  
  var setupStarEvents = function() {
    if (view.inputView.stars) {
      for (var i = 0; i < view.inputView.stars.length; i++) {
        var htmlStarElement = view.inputView.stars[i];
        htmlStarElement.onclick = starClick;
      }
    }
  }
  
  var starClick = function(event) {
    var ratingNumber = parseInt(event.target.id.charAt(1));
    view.inputView.updateStars(ratingNumber);
    getPendingEntry().setProperty('rating', ratingNumber);
  }
  
  var getPendingEntry = function() {
    if (!_pendingEntry) {
      _pendingEntry = new Book();
    }
    return _pendingEntry;
  }
	
  var retrieveBooks = function() {
    model.getInstance().getFromLocalStorage();
  }
	
	var showBooksRead = function() {
		retrieveBooks();
		var bookList = model.getInstance().getBooks();
		bookList.forEach(view.outputView.addBookToList);
	}
  
  return {
    view: view,
    saveTitle: saveTitle,
    saveAuthor: saveAuthor,
    saveYear: saveYear,
    saveBook: saveBook,
    setupStarEvents: setupStarEvents,
    starClick: starClick,
    getPendingEntry: getPendingEntry,
    retrieveBooks: retrieveBooks,
		showBooksRead: showBooksRead
  }
};
