function saveRecipe(button) {

    const isSaved = button.classList.contains('saved');


    if (isSaved) {

        button.classList.remove('saved');
    } else {

        button.classList.add('saved');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments à animer
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideUpElements = document.querySelectorAll('.slide-up');

    // Options de l'observateur
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Pourcentage de l'élément visible pour déclencher l'animation
    };

    // Fonction de callback pour l'observateur
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Ne plus observer cet élément
            }
        });
    };

    // Création de l'observateur
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observation des éléments
    fadeInElements.forEach(element => observer.observe(element));
    slideUpElements.forEach(element => observer.observe(element));
});



document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.querySelector('.custom-comment-form');
    const commentField = document.querySelector('.custom-comment-field');
    const submitButton = document.querySelector('.custom-submit-button');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        const comment = commentField.value.trim();

        if (comment.length === 0) {
            alert('Veuillez écrire un commentaire avant de soumettre.');
            return;
        }

        // Adresse URL de l'API REST de WordPress pour publier des commentaires
        const apiUrl = 'http://localhost:8888/wellness-site/wp-json/wp/v2/comments';


        // Préparer les données à envoyer
        const data = {
            post: 1, // Remplacer par l'ID de l'article ou de la page
            content: comment
        };

        // Envoyer la requête POST avec fetch
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': wpApiSettings.nonce // Inclure le nonce pour la sécurité
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result && result.id) {
                alert('Commentaire publié avec succès!');
                commentField.value = ''; // Réinitialiser le champ de commentaire
            } else {
                alert('Une erreur est survenue. Veuillez réessayer.');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        });
    });
});


// Fonction pour vérifier si une valeur est valide
function validateField(input) {
    const value = input.value.trim();
    if (value === "") {
        input.classList.remove('input-valid');
        input.classList.add('input-error');
    } else {
        // Validation simple pour les e-mails
        if (input.type === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            input.classList.remove('input-valid');
            input.classList.add('input-error');
        } else {
            input.classList.remove('input-error');
            input.classList.add('input-valid');
        }
    }
}

// Ajoutez des gestionnaires d'événements aux champs de formulaire
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('blur', () => validateField(input)); // Vérifie le champ lorsque le focus est perdu
        input.addEventListener('input', () => validateField(input)); // Vérifie le champ en temps réel
    });

    // Soumet le formulaire lorsque le bouton est cliqué
    document.getElementById('submit-button').addEventListener('click', function() {
        document.getElementById('inscription-form').submit();
    });
});


