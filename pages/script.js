console.log("JavaScript file is linked successfully!");


function submitForm() {
    // Access the form element safely
    const form = document.getElementById("contactForm");
    
    if (form) {
        form.reset(); // Reset the form fields
    } else {
        console.error("Form with id 'contactForm' not found.");
        return; // Exit the function if form is null
    }

    // Display the thank-you message
    const responseMessage = document.getElementById("responseMessage");
    if (responseMessage) {
        responseMessage.textContent = "Thank you for responding!";
        responseMessage.style.display = "block";
    } else {
        console.error("Response message container not found.");
    }
