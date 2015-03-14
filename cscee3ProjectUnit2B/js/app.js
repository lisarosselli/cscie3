/*
 * app.js
 *
 * App object acting sort of like a controller
 *
 * @author L.Rosselli
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
  }
  
  var saveAuthor = function(event) {
    console.log('saveAuthor ' + event.target.value);
  }
  
  var saveYear = function(event) {
    console.log('saveYear ' + event.target.value);
  }
  
  var saveAll = function(event) {
    console.log('saveAll');
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
    var ratingNumber = event.target.id.charAt(1);
    view.inputView.updateStars(ratingNumber);
  }
  
  var getPendingEntry = function() {
    return _pendingEntry;
  }
  
  return {
    view: view,
    saveTitle: saveTitle,
    saveAuthor: saveAuthor,
    saveYear: saveYear,
    saveAll: saveAll,
    setupStarEvents: setupStarEvents,
    starClick: starClick,
    getPendingEntry: getPendingEntry
  }
};
