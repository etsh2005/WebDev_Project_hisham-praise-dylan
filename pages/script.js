function submitForm() {
    console.log("Submit button clicked!");

    // Retrieve form inputs
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;

    // Validate non-empty inputs
    if (fname === '' || lname === '' || email === '') {
        alert('All fields are required.');
        return false;
    }

    // Validate email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Reset the form
    const form = document.getElementById("contactForm");
    if (form) {
        form.reset();
    } else {
        console.error("Form with id 'contactForm' not found.");
        return;
    }

    // Display thank-you message
    const responseMessage = document.getElementById("responseMessage");
    if (responseMessage) {
        responseMessage.textContent = "Thank you for responding!";
        responseMessage.style.display = "block";
    } else {
        console.error("Response message container not found.");
    }
}
