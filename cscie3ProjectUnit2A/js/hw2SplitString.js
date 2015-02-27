/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Third problem: Splitting a String
  *
  ********************************************************************/


var splitName = document.getElementById("splitName");
splitName.onclick = function(){

  var fullname = document.getElementById("fullName");
  var userName = fullname.value;
  var regExp = /^[a-z A-Z]+(-[a-z A-Z]+)?$/;
          
  if (!regExp.test(userName)) {
    // Exit out of this function if the name contains
    // items that are not "name like" (e.g. numbers, 
    // or characters that are not letters).
      console.log("User entered something not like a name.");
      return;
    }
    
    /* if user does not enter a space at all (i.e. only first name)
     * indexOf will return -1
     */
    var spaceIndex = (userName.indexOf(" ") == -1) ? userName.length : userName.indexOf(" ");     
    var firstname = userName.slice(0, spaceIndex);
    var lastname = userName.slice(spaceIndex+1, userName.length);

    document.getElementById("firstname").innerHTML = firstname;
    document.getElementById("lastname").innerHTML = lastname;
}