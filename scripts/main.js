// scripts/main.js du formulaire de contact
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nom = document.getElementById('nomContact').value;
        const email = document.getElementById('emailContact').value;
        const message = document.getElementById('message').value;

        alert(`Message envoyé !\nNom: ${nom}\nEmail: ${email}\nMessage: ${message}`);

        // Réinitialiser le formulaire
        contactForm.reset();
    });
});

// la soumission du formulaire de resevation de billet
// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const reservationForm = document.getElementById('reservationForm');

    // Formulaire de Contact
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nom = document.getElementById('nomContact').value;
            const email = document.getElementById('emailContact').value;
            const message = document.getElementById('message').value;

            alert(`Message envoyé !\nNom: ${nom}\nEmail: ${email}\nMessage: ${message}`);

            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }

    // Formulaire de Réservation de Billets
    if (reservationForm) {
        reservationForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const billets = document.getElementById('billets').value;
            const date = document.getElementById('date').value;
            const heure = document.getElementById('heure').value;

            alert(`Réservation effectuée !\nNom: ${nom}\nEmail: ${email}\nNombre de Billets: ${billets}\nDate: ${date}\nHeure: ${heure}`);

            // Réinitialiser le formulaire
            reservationForm.reset();
        });
    }
});
