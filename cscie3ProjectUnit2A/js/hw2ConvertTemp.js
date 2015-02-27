/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */

 /********************************************************************
  *
  * First problem: temperature conversion
  *
  * If the values entered by the user aren't numbers (or convertible to numbers),
  * return nothing (or, more specifically, leave the output field blank)
  *
  ********************************************************************/


function cToF(celcius) {
  var celcius = Number.parseFloat(celcius);
  if (!isNaN(celcius)) {
    return (celcius * (9/5)) + 32;
  }
  return false;
}

var convertCtoF = document.getElementById("degC");
convertCtoF.onchange = function(){ 
  var degreesC = document.getElementById("degC").value; 
  var degreesF = cToF(degreesC);
  document.getElementById("degFOut").innerHTML = "<b>"+degreesF+"</b>";
}

 var convertFtoC = document.getElementById("degF");
 convertFtoC.onchange = function(){  //onchange means that every time the value in the input box changes, this function will run
                var degreesF = document.getElementById("degF").value; // this is the value from the form field
                var degreesC;
                
                //(°F - 32) x 5/9 = °C
                degreesF = Number.parseInt(degreesF);
                if (!isNaN(degreesF)) {
                  degreesC = ((degreesF - 32) * (5/9));
                  degreesC = Number.parseInt(degreesC);
                }

                // now we write the result to the page
                document.getElementById("degCOut").innerHTML = "<b>" + degreesC + "</b>";
 }

// Attempting to run some unit tests with my own homegrown code. 
Truffle.setLogLevel(1);
Truffle.assert(cToF("m") === false, "'m' yields false from cToF");
Truffle.assert(!isNaN(cToF("3")), "'3' yields a number output from cToF");
Truffle.assert(!isNaN(cToF("5.2")), "'5.2' yields a number output from cToF");
Truffle.assert(cToF(true) === false, "true yields false output from cToF");
