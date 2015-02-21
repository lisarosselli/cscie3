/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Second problem: Put An X
  *
  ********************************************************************/

var putAnXBtn = document.getElementById("putAnXButton");
putAnXBtn.onclick = function(){

 	// get a reference to the box
  var theBox = document.getElementById("putAnX");
  var width = theBox.clientWidth;
  var height = theBox.clientHeight;

  var xPosition = Number.parseInt(Math.random() * width);
  var yPosition = Number.parseInt(Math.random() * height);
        
 	//now we'll get the HTML element where the X goes, fill in the X and set the position of the element.
 	var theXElement = document.getElementById("theX");
  theXElement.innerHTML="X";
  theXElement.style.top = yPosition+'px';
  theXElement.style.left = xPosition+'px';
}
