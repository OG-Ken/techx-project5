// JavaScript Document

function validateForm() {
	var user = document.myform.user.value;
	var pass = document.myform.psw.value;

	if ((name == null || name =="") && (pass == null || pass == "")) {
		alert ("Please enter your username and password");
		return false;
	}else if (user == null || user == "") {
		alert("Please enter your username");
		return false;
	}else if (pass == null || pass == "") {
		alert("Please enter your password");
		return false;
	}
}
