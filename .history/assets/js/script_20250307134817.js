document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, textarea');
    
    form.addEventListener('submit', function(event) {
        let isValid = true;
        
        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;
            if (!input.value.trim()) {
                errorMessage.textContent = 'Ce champ est requis';
                isValid = false;
            } else {
                errorMessage.textContent = '';
            }
        });
        
        if (!isValid) {
            event.preventDefault();
        }
    })});

    document.addEventListener('DOMContentLoaded', function() {
        const imageContainers = document.querySelectorAll('.image-container');
    
        imageContainers.forEach(container => {
            container.addEventListener('click', function() {
                const overlay = container.querySelector('.overlay');
                const strong = container.querySelector('strong');
    
                if (overlay && strong) {
                    overlay.style.opacity = '1';
                    strong.style.display = 'none';
                }
            });
        });
    });