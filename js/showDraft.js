function showDraft(){
	var newTable = document.createElement("table");
		newTable.setAttribute("id", "jsDraft");
		newTable.setAttribute("class", "main_table");
	    newTable.innerHTML = "<tr><th>First name: </th><th>" +
		sessionStorage.getItem('firstName') + "</th><th>Last name: </th><th>" +
		sessionStorage.getItem('lastName') + "</th></tr>" +
		"<tr><th>E-mail: </th><th>" +
		sessionStorage.getItem('email') + "</th><th>Phone number: </th><th>" +
		sessionStorage.getItem('phoneNumber') + "</th></tr>" +
		"<tr><th>Country: </th><th>" +
		sessionStorage.getItem('country') + "</th><th>City: </th><th>" +
		sessionStorage.getItem('city') + "</th></tr>" +
		"<tr><th>Adress: </th><th>" +
		sessionStorage.getItem('adress') + "</th></tr>";
	insertTable = document.getElementById("insert");
	document.body.insertBefore(newTable, insertTable);
}