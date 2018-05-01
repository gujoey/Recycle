function checkForm(){
	let name, nameErr, email, emailErr, regExEmail;
	let comment, commentErr;

	
	//check for input value in firstname field
	name = document.getElementById("name").value;
	nameErr = document.getElementById("nameError");
	
	if (name === "" || name === undefined){
		nameErr.style.display = "block";
		nameErr.style.color = "red";
		document.getElementById("name").style.borderColor = "red";
		return false;
	}else{
		nameErr.style.display = "none";
		document.getElementById("name").style.borderColor = "green";
	}
	
	//check for valid input value in email field
	regExEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/;
	email = document.getElementById("email").value;
	emailErr = document.getElementById("emailError");
	
	if (!regExEmail.test(email)){
		emailErr.style.display = "block";
		emailErr.style.color = "red";
		document.getElementById("email").style.borderColor = "red";
		return false;
	}else{
		emailErr.style.display = "none";
		document.getElementById("email").style.borderColor = "green";
	}
	
	//check for input value in comment field
	comment = document.getElementById("textArea").value;
	commentErr = document.getElementById("textAreaError");
	
	if (comment === "" || comment === undefined){
		commentErr.style.display = "block";
		commentErr.style.color = "red";
		document.getElementById("textArea").style.borderColor = "red";
		return false;
	}else{
		commentErr.style.display = "none";
		document.getElementById("textArea").style.borderColor = "green";
	}
}