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
 convertCtoF.onchange = function(){  //onchange means that every time the value in the input box changes, this function will run
                var degreesC = document.getElementById("degC").value; 
                var degreesF;
                
                //°C x 9/5 + 32 = °F
                degreesC = Number.parseInt(degreesC);
                if (!isNaN(degreesC)) {
                  degreesF = ((degreesC * (9/5)) + 32);
                  degreesF = Number.parseInt(degreesF);
                }

                // now we write the result to the page
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
