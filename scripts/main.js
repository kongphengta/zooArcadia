// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const reservationForm = document.getElementById('reservationForm');

    // Formulaire de Contact
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nom = document.getElementById('nomContact').value;
        const email = document.getElementById('emailContact').value;
        const message = document.getElementById('message').value;

        alert(`Message envoyé !\nNom: ${nom}\nEmail: ${email}\nMessage: ${message}`);

        // Réinitialiser le formulaire
        contactForm.reset();
    });

    // Formulaire de Réservation de Billets
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const billets = document.getElementById('billets').value;

        alert(`Réservation effectuée !\nNom: ${nom}\nEmail: ${email}\nNombre de Billets: ${billets}`);

        // Réinitialiser le formulaire
        reservationForm.reset();
    });
});