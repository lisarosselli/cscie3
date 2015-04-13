/* 
 * Unit 3B
 *
 * @author L.Rosselli
 *
 */

window.onload = function() {
	console.log('window.onload');
	
	initializeNumber1();
}


/*
 * #1: Passwords **********************************
 */

var passwordObj = new Object(null);

function initializeNumber1() {
	passwordObj.password1 = document.getElementById('pwd1');
	passwordObj.password2 = document.getElementById('pwd2');
	passwordObj.passwordHint1 = document.getElementById('pwd1Hint');
	passwordObj.passwordHint2 = document.getElementById('pwd2Hint');
	
	passwordObj.password1.addEventListener('input', pass1Validation);
	passwordObj.password2.addEventListener('input', pass2Validation);
}

function pass1Validation(event) {
	var charsNeeded = 8;
	
	if (event.target.value.length >= charsNeeded || event.target.value.length == 0) {
		passwordObj.passwordHint1.className = '';
	} else if (event.target.value.length < charsNeeded) {
		passwordObj.passwordHint1.innerHTML = 'Please add ' + (charsNeeded - event.target.value.length) + ' more characters.';
		passwordObj.passwordHint1.className = 'hint';
	} 
}

function pass2Validation(event) {
	if (passwordObj.password2.value == '') {
		passwordObj.password1.className = '';
		passwordObj.password2.className = '';
		passwordObj.passwordHint2.className = '';
	} else if (passwordObj.password2.value == passwordObj.password1.value) {
		passwordObj.password1.className = 'good';
		passwordObj.password2.className = 'good';
		passwordObj.passwordHint2.className = '';
	} else if (passwordObj.password2.value !== passwordObj.password1.value) {
		passwordObj.passwordHint2.innerHTML = 'Passwords do not yet match.';
		passwordObj.passwordHint2.className = 'hint';
	} 
}

// end #1 ******************************************








