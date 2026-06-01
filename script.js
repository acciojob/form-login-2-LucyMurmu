//your JS code here. If required.
document.getElementById("myform").addEventListener("submit", function(e){
	e.preventDefault();
	 const firstName = document.getElementById("first-name").value;
            const lastName = document.getElementById("last-name").value;
            const phone = document.getElementById("phone-number").value;
            const email = document.getElementById("email-id").value;
	alert("First Name: " + firstName +
                " Last Name: " + lastName +
                " Phone Number: " + phone +
                " Email ID: " + email);
});
