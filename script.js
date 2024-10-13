// Function for the 'Learn More' button on the hero section
function learnMore() {
    window.location.href = "#about";
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation and response
    if (name && email && message) {
        document.getElementById('response').innerText = "Thank you for reaching out! We will get back to you soon.";
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('response').innerText = "Please fill out all fields.";
    }
}
