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

    const donDiv = document.getElementById('Don');
    const articles = document.querySelectorAll('.Art1, .Art3');

    function getContrastYIQ(hexcolor) {
        hexcolor = hexcolor.replace("#", "");
        const r = parseInt(hexcolor.substr(0, 2), 16);
        const g = parseInt(hexcolor.substr(2, 2), 16);
        const b = parseInt(hexcolor.substr(4, 2), 16);
        const yiq = ((r*299)+(g*587)+(b*114))/1000;
        return (yiq >= 128) ? 'black' : 'white';
    }

    function getBackgroundColor(element) {
        return window.getComputedStyle(element).backgroundColor;
    }

    function rgbToHex(rgb) {
        const result = rgb.match(/\d+/g).map(function(x) {
            return parseInt(x).toString(16).padStart(2, '0');
        });
        return `#${result.join('')}`;
    }

    function checkVisibility() {
        articles.forEach(article => {
            const rect = article.getBoundingClientRect();
            const donRect = donDiv.getBoundingClientRect();
            if (rect.top < donRect.bottom && rect.bottom > donRect.top) {
                const bgColor = getBackgroundColor(article);
                const hexColor = rgbToHex(bgColor);
                const textColor = getContrastYIQ(hexColor);
                donDiv.style.backgroundColor = bgColor;
                donDiv.style.color = textColor;
            } else {
                donDiv.style.backgroundColor = '#6495ED';
                donDiv.style.color = 'white';
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Initial check
});