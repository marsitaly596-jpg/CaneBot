// Script interattivo per CaneBot
console.log('CaneBot caricato!');

// Aggiungi effetto al bottone
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn');
    if (button) {
        button.addEventListener('click', function() {
            alert('Grazie per il tuo interesse! 🎉');
        });
    }
});

// Scroll smooth per i link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
