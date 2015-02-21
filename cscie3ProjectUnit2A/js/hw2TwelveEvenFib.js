/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
  document.getElementById("sumFibResult").innerHTML = "<b>" + twelveEvenFibonacciSum() + "</b>";
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21...
function twelveEvenFibonacciSum(){

  var acc = 0;
  var numsAdded = 0;
  var fibSeq = [0, 1];
  
  do {    
    var newNum = fibSeq[fibSeq.length-1] + fibSeq[fibSeq.length-2];
    fibSeq.push(newNum);
      
    // if the new number is even, add it up
    if ((newNum % 2) == 0) {
      acc += newNum;
      numsAdded++;
      console.log("adding "+newNum)
    }
  } while(numsAdded < 11); // 0 is the "first" even number added

  console.log(fibSeq);

  return acc;
}