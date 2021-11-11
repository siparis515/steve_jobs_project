function saveDraft(){
	var formVar = {
		firstName: document.form1.firstName.value,
		lastName: document.form1.lastName.value,
		email: document.form1.email.value,
		phoneNumber: document.form1.phoneNumber.value,
		country: document.form1.country.value,
		city: document.form1.city.value,
		adress: document.form1.adress.value
	};
	sessionStorage.setItem('firstName', formVar.firstName);
	sessionStorage.setItem('lastName', formVar.lastName);
	sessionStorage.setItem('email', formVar.email);
	sessionStorage.setItem('phoneNumber', formVar.phoneNumber);
	sessionStorage.setItem('country', formVar.country);
	sessionStorage.setItem('city', formVar.city);
	sessionStorage.setItem('adress', formVar.adress);
	alert('All data was saved as a draft successfully!');
}