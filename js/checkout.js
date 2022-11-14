



// Exercise 6
function validate(event) {
	event.preventDefault();
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");


	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");  
	let errorAddress = document.getElementById("errorAddress");  
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");  
	let errorPhone = document.getElementById("errorPhone");  

	//En aquest exercici hauràs d'implementar la lògica perquè els camps del formulari compleixin les següents condicions:

	
	//- Tots els camps són obligatoris.

	//- Tots els camps han de tenir almenys 3 caràcters.

	//- El nom i cognoms han de contenir només lletres.

	//- El telèfon ha de contenir només números.

	//- La contrasenya ha d'incloure números i lletres.

	//- L'email ha de tenir format d'email.

	//Expresions regulars
	let expRegName = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/;
	let expRegEmail = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
	let expRegAddress = /^.{3,}$/;
	let expRegLastN = /^[-'a-zA-ZÀ-ÿ\s]{3,}$/;
	let expRegPassword = /^.[a-z0-9_-]{3,}$/;
	let expRegPhone = /^\d{9}$/;

	//Quan l'usuari introdueixi un camp que no compleixi les validacions anteriors, l'input s'ha de ressaltar en vermell i mostrar un missatge a la part inferior.

	//Ajuda: podràs acolorir la vora de l'input en vermell i mostrar el missatge d'error manipulant el dom, encara que també pots usar la classe is-invalid de bootstrap.

	// Validate fields entered by the user: name, phone, password, and email
	if((fName.value == "")||(expRegName.test(fName.value) == false)){
		error++;
		errorName.style = "display:inline"; 
		fName.classList.add("is-invalid");
		fName.classList.remove("is-valid");
	}else{
		errorName.style = "display:none"; 
		fName.classList.add("is-valid");
		fName.classList.remove("is-invalid");
	}

	if((fEmail.value == "")||(expRegEmail.test(fEmail.value) == false)){
		error++;
		errorEmail.style = "display:inline"; 
		fEmail.classList.add("is-invalid");
		fEmail.classList.remove("is-valid");
	}else{
		errorEmail.style = "display:none"; 
		fEmail.classList.add("is-valid");
		fEmail.classList.remove("is-invalid");
	}

	if((fAddress.value == "")||(expRegAddress.test(fAddress.value) == false)){
		error++;
		errorAddress.style = "display:inline"; 
		fAddress.classList.add("is-invalid");
		fAddress.classList.remove("is-valid");
	}else{
		errorAddress.style = "display:none"; 
		fAddress.classList.add("is-valid");
		fAddress.classList.remove("is-invalid");
	}

	if((fLastN.value == "")||(expRegLastN.test(fLastN.value) == false)){
		error++;
		errorLastN.style = "display:inline"; 
		fLastN.classList.add("is-invalid");
		fLastN.classList.remove("is-valid");
	}else{
		errorLastN.style = "display:none"; 
		fLastN.classList.add("is-valid");
		fLastN.classList.remove("is-invalid");
	}

	if((fPassword.value == "")||(expRegPassword.test(fPassword.value) == false)){
		error++;
		errorPassword.style = "display:inline"; 
		fPassword.classList.add("is-invalid");
		fPassword.classList.remove("is-valid");
	}else{
		errorPassword.style = "display:none"; 
		fPassword.classList.add("is-valid");
		fPassword.classList.remove("is-invalid");
	}

	if((fPhone.value == "")||(expRegPhone.test(fPhone.value) == false)){
		error++;
		errorPhone.style = "display:inline"; 
		fPhone.classList.add("is-invalid");
		fPhone.classList.remove("is-valid");
	}else{
		errorPhone.style = "display:none"; 
		fPhone.classList.add("is-valid");
		fPhone.classList.remove("is-invalid");
	}
	
	/*
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}
	*/

}

