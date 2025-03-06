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
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const donDiv = document.getElementById('Don');
    const art1 = document.querySelector('.Art1');
    const art3 = document.querySelector('.Art3');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        if (isElementInViewport(art1) || isElementInViewport(art3)) {
            donDiv.style.backgroundColor = 'white';
            donDiv.style.color = 'black';
        } else {
            donDiv.style.backgroundColor = '#6495ED';
            donDiv.style.color = 'white';
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Initial check
});