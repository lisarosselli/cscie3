function App() {
  var _disallowTitleChars = /^[^<>*$#@|~`+=%\[\]\"\{\}\\\/\^]*$/;
  var _disallowAuthorChars = /^[^<>!@#$%&*|()+=%\[\]\"\'?,~`\{\}\\\/\^0-9]*$/;
  var _pendingEntry;
  var view = new View();

  
  // controller-type actions
  var saveTitle = function(value) {
    console.log('saveTitle'); 
  }
  
  var saveAuthor = function(value) {
    console.log('saveAuthor');
  }
  
  var saveYear = function(value) {
    console.log('saveYear');
  }
  
  var getPendingEntry = function() {
    return _pendingEntry;
  }
  
  return {
    view: view
  }
};
