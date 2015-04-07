/* hw3a.js  */


function doDivideTranscript() {
	console.log('doDivideTranscript');
	var ttDiv = document.getElementById('transcriptText')
	var ttText = ttDiv.textContent;
	var wordArray1 = ttText.split(" ");
	var wordArray2 = new Array();
	var elementArray = new Array();

	// add some space
	ttDiv.innerHTML += "<br>------<br>";

	// drop any values that are spaces or blank words
	for (var i = 0; i < wordArray1.length; i++) {
		if (wordArray1[i] !== "") {
			wordArray2.push(wordArray1[i]);
		}
	}

	// create the span elements
	for (var i = 0; i < wordArray2.length; i++) {
		var element = document.createElement('span');
		var classname = 'word';
		element.className = classname;
		element.id = 'w' + i;
		element.textContent = wordArray2[i] + " ";
		elementArray.push(element);
	}

	// add the new elements to the div
	for (var i = 0; i < elementArray.length; i++) {
		ttDiv.appendChild(elementArray[i]);
	}

	/*
	 * below is specifically for #3. Add a handler...
	 * although .word:hover in CSS works fine too
	 * and likely less computational expense?
	 */
	// add the mouseover/background color functionality
	ttDiv.addEventListener('mouseover', function(e) {
		var t = e.target
		if (e.target.className == 'word') {
			e.target.style.backgroundColor = '#ccccFF';
		}
	})

	// add the mouseout/background clear functionality
	ttDiv.addEventListener('mouseout', function(e) {
		var t = e.target;

		if (e.target.className == 'word') {
			e.target.style.backgroundColor = null;
		}
	})

	ttDiv.addEventListener('click', function(e) {
		var t = e.target;
		console.log(t);
	})
}

var btn = document.getElementById('divideTranscript');
btn.addEventListener('click', doDivideTranscript);


