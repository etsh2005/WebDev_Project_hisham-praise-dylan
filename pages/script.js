


function submitForm() {
    console.log("Submit button clicked!");
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('e.mail').value;
 
    // avoiding blank input
    if (fname === '' || lname === '' || email === '') 
    {
        alert('Name and email are required');
              return false;
    }
    // validating email format using a simple regular expression
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) 
    {
        alert('Please enter a valid email address');
         return false;
    }

    const form = document.getElementById("contactForm");
    if (form) {
        form.reset(); // Reset the form fields
    } 
    else {
        console.error("Form with id 'contactForm' not found.");
        return;
    }
 
    const responseMessage = document.getElementById("responseMessage");
    console.log(responseMessage);
    if (responseMessage) {
        responseMessage.textContent = "Thank you for responding!";
        responseMessage.style.display = "block";
    } else {
        console.error("Response message container not found.");
    }
}
