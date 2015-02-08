/* sam.js */
'use strict';

var myButton = document.getElementById('whatsnextbutton');

myButton.onclick = function() {
  console.log('in onclick function');
  var myDiv = document.getElementById('whatsnext');
  myDiv.style.display = 'block';
}

