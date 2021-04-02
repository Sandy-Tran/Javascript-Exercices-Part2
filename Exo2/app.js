var elem = document.getElementById('Damn');

elem.onblur = afficherMessage;

function afficherMessage() {
	alert("Merci de votre participation!");
}
