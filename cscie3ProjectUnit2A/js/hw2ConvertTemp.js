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

/*
 * celcius to fahrenheit
 *
 */
function cToF(celcius) {
  var celcius = Number.parseInt(celcius);
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


/*
 * fahrenheit to celcius
 *
 */
function fToC(fahrenheit) {
  var f = Number.parseInt(fahrenheit);
  if (!isNaN(f)) {
    f = ((f - 32) * (5/9));
    return Number(f.toFixed(1));
  }
  return false;
}

var convertFtoC = document.getElementById("degF");
convertFtoC.onchange = function(){ 
  var degreesF = document.getElementById("degF").value;
  var degreesC = fToC(degreesF);
  document.getElementById("degCOut").innerHTML = "<b>"+degreesC+"</b>"
 }

// Attempting to run some unit tests with my own homegrown code. 
Truffle.setLogLevel(1);

Truffle.assert(cToF("m") === false, "'m' yields false from cToF");
Truffle.assert(!isNaN(cToF("3")), "'3' yields a number output from cToF");
Truffle.assert(!isNaN(cToF("5.2")), "'5.2' yields a number output from cToF");
Truffle.assert(cToF(true) === false, "true yields false output from cToF");

Truffle.assert(fToC("h") === false, "'h' yields false from fToC");
Truffle.assert(!isNaN(fToC("75")), '75 yields a number output from fToC');
Truffle.assert(!isNaN(fToC('55.5')), '55.5 yields a number output from fToC');
Truffle.assert(fToC(true) === false, "true yields false output from fToC");
