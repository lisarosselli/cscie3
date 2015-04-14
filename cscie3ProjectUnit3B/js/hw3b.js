/* 
 * Unit 3B
 *
 * @author L.Rosselli
 *
 */

window.onload = function() {
	initializeNumber1();
	initializeNumber2();
	initializeNumber3();
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
		passwordSuccess(false);
	} else if (event.target.value.length < charsNeeded) {
		passwordObj.passwordHint1.innerHTML = 'Please add ' + (charsNeeded - event.target.value.length) + ' more characters.';
		passwordObj.passwordHint1.className = 'hint';
	} 
}

function pass2Validation(event) {
	if (passwordObj.password2.value == '') {
		passwordSuccess(false);
		passwordObj.passwordHint2.className = '';
	} else if (passwordObj.password2.value == passwordObj.password1.value) {
		passwordSuccess(true);
		passwordObj.passwordHint2.className = '';
	} else if (passwordObj.password2.value !== passwordObj.password1.value) {
		passwordObj.passwordHint2.innerHTML = 'Passwords do not yet match.';
		passwordObj.passwordHint2.className = 'hint';
	} 
}

function passwordSuccess(value) {
	if (value) {
		passwordObj.password1.className = 'good';
		passwordObj.password2.className = 'good';
	} else {
		passwordObj.password1.className = '';
		passwordObj.password2.className = '';
	}
}
// end #1 *****************************************



/*
 * #2: Brief Bio **********************************
 */

var bioObj = new Object(null);

function initializeNumber2() {
	bioObj.bioBox = document.getElementById('bio');
	bioObj.charsLeft = document.getElementById('charsLeft');
	
	bioObj.bioBox.addEventListener('input', calcCharsLeft);
}

function calcCharsLeft(event) {
	var allowedChars = 140;
	bioObj.charsLeft.innerHTML = allowedChars - event.target.value.length
}
// end #2 ****************************************


/*
 * #3: Pull-down menu ****************************
 */
var selObj;
var nullHolder;
var hungerGames;
var harryPotter;
var sel1Opts;

function initializeNumber3() {
	selObj = new Object(null);
	nullHolder = new Object(null);
	hungerGames = new Object(null);
	harryPotter = new Object(null);
	sel1Opts = new Array();
	
	selObj.firstSelect = document.getElementById('firstSelect');
	selObj.secondSelect = document.getElementById('secondSelect');
	
	nullHolder.name = '----';
	
	hungerGames.name = 'Hunger Games';
	hungerGames.books = ['The Hunger Games', 'Catching Fire', 'Mockingjay'];
	
	harryPotter.name = 'Harry Potter';
	harryPotter.books = ['Harry Potter & the Sorcerers Stone', 'Harry Potter & the Chamber of Secrets', 'Harry Potter & the Prizoner of Azkaban'];
	
	sel1Opts = [nullHolder, harryPotter, hungerGames];
	for (var i = 0; i < sel1Opts.length; i++) {
		var opt = document.createElement('option');
		opt.setAttribute('value', i);
		opt.setAttribute('label', sel1Opts[i].name);
		selObj.firstSelect.appendChild(opt);
	}
	
	selObj.firstSelect.addEventListener('change', onSelect1Change);
}

function removeChildren(selectBox) {
	for (var i = 0; i < selectBox.children.length; i++) {
		var thisChild = selectBox[i];
		selectBox.removeChild(thisChild);
	}
}

function onSelect1Change(event) {
	console.log('hi');
	
	removeChildren(selObj.secondSelect);
	
	var s = sel1Opts[event.target.selectedIndex];
	
	if (s.books != null) {
		console.log('ok');
		for (var i = 0; i < s.books.length; i++) {
			var opt = document.createElement('option');
			opt.setAttribute('value', i);
			opt.setAttribute('label', s.books[i]);
			selObj.secondSelect.appendChild(opt);
		}
	}
	
}






