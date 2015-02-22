'use strict';

var textField = document.getElementById("myWordsToCount");

textField.onkeyup = function() {
  var userEntry = textField.value;
  var allWords = userEntry.split(" ");
  var realWords = allWords.filter(function(word) {
    return (word != false);
  });
  
  document.getElementById("wordcount").innerHTML = "<b>" + realWords.length + "</b>";
}