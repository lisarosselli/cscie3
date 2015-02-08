/* sam.js */
'use strict';

var myButton = document.getElementById('whatsnextbutton');

myButton.onclick = function() {
  var myDiv = document.getElementById('whatsnext');
  
  /*
  if (myDiv.style.display == '') {
    myDiv.style.display = 'block';
  } else {
    myDiv.style.display = '';
  }
  */
  
  // learned that css-wise display: none; 
  // is literally an empty string
  
  // this toggles the image on and off
  myDiv.style.display = (myDiv.style.display == '') ? 'block' : '';
  
}

