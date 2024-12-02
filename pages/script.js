function submitForm() {
    console.log("Submit button clicked!"); // Debugging line

    const form = document.getElementById("contactForm");
    if (form) {
        form.reset(); // Reset the form fields
    } else {
        console.error("Form with id 'contactForm' not found.");
        return;
    }

    const responseMessage = document.getElementById("responseMessage");
    if (responseMessage) {
        responseMessage.textContent = "Thank you for responding!";
        responseMessage.style.display = "block";
    } else {
        console.error("Response message container not found.");
    }
}
