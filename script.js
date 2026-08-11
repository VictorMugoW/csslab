function welcomeUser() {

    let name = prompt("Welcome to Space Tourism! What is your name?");

    if (name !== null && name.trim() !== "") {

        let welcomeMessage = document.getElementById("welcome-message");

        if (welcomeMessage) {
            welcomeMessage.textContent =
                "Welcome, " + name.trim() + "! 🚀 Ready for your space adventure?";
        }
    }
}


function validateBookingForm(event) {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let destination = document.getElementById("destination");

    let errorMessage = document.getElementById("form-error");

    let errors = [];

    if (name.value.trim() === "") {
        errors.push("Please enter your full name.");
    }

    if (email.value.trim() === "") {
        errors.push("Please enter your email address.");
    }

    if (destination.value === "") {
        errors.push("Please select a destination.");
    }

    if (errors.length > 0) {

        event.preventDefault();

        errorMessage.textContent = errors.join(" ");

        errorMessage.style.display = "block";

        return false;
    }

    errorMessage.style.display = "none";

    return true;
}


// 3. DYNAMIC FEATURE
// Show or hide additional space-tourism information
function toggleInformation() {

    let information = document.getElementById("extra-information");

    if (information.style.display === "none") {

        information.style.display = "block";

    } else {

        information.style.display = "none";

    }
}


function changeHomeMessage() {

    let message = document.getElementById("home-message");

    if (message) {

        message.textContent =
            "🌟 Your journey beyond Earth starts here! Explore our destinations and book your adventure today.";

    }
}


window.addEventListener("load", function () {

    if (document.getElementById("welcome-message")) {
        welcomeUser();
    }

});
