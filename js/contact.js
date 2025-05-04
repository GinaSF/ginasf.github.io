// EmailJS configuration for contact form
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    // You'll need to sign up at https://www.emailjs.com/ and replace this with your actual public key
    emailjs.init('FSQkGVLIffes8Yzjp');

    const contactForm = document.getElementById('contact-form');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formStatus = document.getElementById('form-status');
    const originalButtonText = 'Send Message';
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset form status
        formStatus.textContent = '';
        formStatus.className = 'form-status';
        
        // Change button text and disable it during submission
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Prepare template parameters
        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            to_email: 'ginafladstad@gmail.com'
        };
        
        // Send email using EmailJS
        // You'll need to replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs from EmailJS
        emailjs.send('service_m6n3l4x', 'template_5wp305k', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                submitButton.textContent = 'Message Sent!';
                formStatus.textContent = 'Your message has been sent successfully!';
                formStatus.className = 'form-status success';
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(function() {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                }, 3000);
            }, function(error) {
                console.log('FAILED...', error);
                submitButton.textContent = 'Failed to Send';
                formStatus.textContent = 'There was an error sending your message. Please try again later.';
                formStatus.className = 'form-status error';
                
                // Reset button after 3 seconds
                setTimeout(function() {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                }, 3000);
            });
    });
});