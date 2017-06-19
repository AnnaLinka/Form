document.addEventListener("DOMContentLoaded", function() {

  var name = document.getElementById("name");
  var email = document.getElementById("email");

	// String.prototype.trim()

  document.querySelector(".btn").addEventListener ("click", function (event) {
		 event.preventDefault();

		// var isFormValid = function validate(form) {
			if (name.value.length < 2) {
				alert('Your name must have at least 2 letters');
				return false;
			}

			var pattern = new RegExp("/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i");
			if (pattern.test(email.value))  {
				alert("Type correct email address");
				return false;
			}

			if(email.value.length < 6 ){
				alert("That is not a valid email address");
				return false;
			}

			else {
				return true;
		  }

  });


});
