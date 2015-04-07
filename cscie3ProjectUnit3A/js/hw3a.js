/* hw3a.js  */

// your solution here

var ttDiv = document.getElementById('transcriptText')
var ttText = ttDiv.textContent;
var wordArray1 = ttText.split(" ");
var wordArray2 = new Array();
var elementArray = new Array();

ttDiv.innerHTML += "<br><br>";

ttDiv.addEventListener('mouseover', function(e) {
	var t = e.target
	
	console.log(e.target.classList);
	if (e.target.classList[0] == 'word') {
		console.log(e.target);
		e.target.style.backgroundColor = 'yellow';
	}
});

ttDiv.addEventListener('mouseout', function(e) {
	var t = e.target;

	if (e.target.classList[0] == 'word') {
		e.target.style.backgroundColor = null;
	}
});


for (var i = 0; i < wordArray1.length; i++) {
	if (wordArray1[i] !== "") {
		wordArray2.push(wordArray1[i]);
	}
}

for (var i = 0; i < wordArray2.length; i++) {
	var element = document.createElement('span');
	var classname = 'word w'+[i];
	element.className = classname;
	element.textContent = wordArray2[i] + " ";
	elementArray.push(element);
}



for (var i = 0; i < elementArray.length; i++) {
	ttDiv.innerHTML += elementArray[i].outerHTML + "<br>";
}
//////--------

function doDivideTranscript() {
	
}

var btn = document.getElementById('divideTranscript');
btn.addEventListener('click', doDivideTranscript);


