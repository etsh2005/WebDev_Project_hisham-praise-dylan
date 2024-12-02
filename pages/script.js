console.log("JavaScript file is linked successfully!");

const form = document.getElementById('submit');
form.submit(); // submits the form

function submitForm() {
    // Prevent default form submission behavior (if necessary)
    const form = document.getElementById("contactForm");
    form.reset(); // Optional: Reset the form fields after submission

    // Display the thank-you message
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = "Thank you for responding!";
    responseMessage.style.display = "block";
}
