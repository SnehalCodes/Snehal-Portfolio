document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) 
    {
        // For demonstration purposes, we'll log the data
        console.log('Form Submitted:', { name, email, message });
        document.getElementById('contact-form').reset();
        alert('Message sent successfully!');
    } else {
        alert('Please fill in all fields.');
    }
});
