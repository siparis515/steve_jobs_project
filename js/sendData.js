function sendData(){
	localStorage.setItem('firstName', sessionStorage.getItem('firstName'));
	localStorage.setItem('lastName', sessionStorage.getItem('lastName'));
	localStorage.setItem('email', sessionStorage.getItem('email'));
	localStorage.setItem('phoneNumber', sessionStorage.getItem('phoneNumber'));
	localStorage.setItem('country', sessionStorage.getItem('country'));
	localStorage.setItem('city', sessionStorage.getItem('city'));
	localStorage.setItem('adress', sessionStorage.getItem('adress'));
	sessionStorage.clear();
	var url = "mailto:test@apple.com?subject=Interest+in+Steve's+life&amp;body=" +
	"First+name:+" +
	localStorage.getItem('firstName') + ",+Last+name:+" +
	localStorage.getItem('lastName') + ",+" +
	"E-mail:+" +
	localStorage.getItem('email') + ",+Phone+number:+" +
	localStorage.getItem('phoneNumber') + ",+" +
	"Country:+" +
	localStorage.getItem('country') + ",+City:+" +
	localStorage.getItem('city') + ",+Adress:+" +
	localStorage.getItem('adress');
	window.open(url, '_blank');
}