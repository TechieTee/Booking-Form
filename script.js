// Function to Submit Form if Form Fields are Valid
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            displayConfirmation();
        }
    });
// Function to Validate Form Fields
    function validateForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var datetime = document.getElementById("datetime").value;
        var reason = document.getElementById("reason").value;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValid = true;

        if (name.trim() === "") {
            isValid = false;
            document.getElementById("name").classList.add("error");
        } else {
            document.getElementById("name").classList.remove("error");
        }

        if (!emailPattern.test(email)) {
            isValid = false;
            document.getElementById("email").classList.add("error");
        } else {
            document.getElementById("email").classList.remove("error");
        }

        return isValid;
    }
// Function to Display Confirmation Message when Form is Submitted
    function displayConfirmation() {
        alert("You've scheduled an appointment with Society for Family Health, Please review your email for appointment details.");
        document.getElementById("myForm").reset();
    }
