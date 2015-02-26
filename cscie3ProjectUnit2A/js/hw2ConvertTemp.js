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


var convertCtoF = document.getElementById("degC");
convertCtoF.onchange = function(){ 
  var degreesC = document.getElementById("degC").value; 
  //chai.assert.isUndefined(degreesC, "No celcius defined.");
  var degreesF;
  
  if (degreesC && !isNaN(Number.parseInt(degreesC))) {
    degreesC = Number.parseInt(degreesC);
    //chai.expect(degreesC).to.be.a('number');
    degreesF = ((degreesC * (9/5)) + 32);
    //chai.expect(degreesF).to.be.a('number');
    degreesF = Number.parseInt(degreesF);
    
    document.getElementById("degFOut").innerHTML = "<b>"+degreesF+"</b>";
  }
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
