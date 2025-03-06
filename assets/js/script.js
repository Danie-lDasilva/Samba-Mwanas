(function(){
    emailjs.init("service_b21d579"); // Remplacez "YOUR_USER_ID" par votre ID utilisateur EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    emailjs.sendForm('service_b21d579', 'template_67tk1fu', this)
        .then(function() {
            alert('Message envoyé avec succès !');
        }, function(error) {
            alert('Échec de l\'envoi du message : ' + JSON.stringify(error));
        });
});