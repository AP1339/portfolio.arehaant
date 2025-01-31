const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const loadingSpinner = document.getElementById('loading-spinner');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    loadingSpinner.style.display = 'block';
    formStatus.textContent = '';

    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
            formStatus.style.color = 'green';
            form.reset();
        } else {
            formStatus.textContent = 'Oops! There was a problem submitting your form.';
            formStatus.style.color = 'red';
        }
    })
    .catch(error => {
        formStatus.textContent = 'Oops! There was a problem submitting your form.';
        formStatus.style.color = 'red';
    })
    .finally(() => {
    
        loadingSpinner.style.display = 'none';
    });
});