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
        if (input.type === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            input.classList.remove('input-valid');
            input.classList.add('input-error');
        } else {
            input.classList.remove('input-error');
            input.classList.add('input-valid');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    function validateField(input) {
        const value = input.value.trim();
        if (value === "") {
            input.classList.remove('input-valid');
            input.classList.add('input-error');
        } else {
            if (input.type === 'email' && !/\S+@\S+\.\S+/.test(value)) {
                input.classList.remove('input-valid');
                input.classList.add('input-error');
            } else {
                input.classList.remove('input-error');
                input.classList.add('input-valid');
            }
        }
    }

    function displayMessage(message, type) {
        const messageContainer = document.getElementById('message-container');
        messageContainer.innerHTML = `<div class="${type}-message">${message}</div>`;
        messageContainer.style.display = 'block';
    }

    document.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => validateField(input));
    });

    document.getElementById('submit-button').addEventListener('click', function(event) {
        event.preventDefault(); // Empêche la soumission normale du formulaire

        const form = document.getElementById('inscription-form');
        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayMessage(data.message, 'success');
                if (data.redirect) {
                    setTimeout(() => {
                        window.location.href = data.redirect;
                    }, 2000); // Redirection après 2 secondes pour permettre à l'utilisateur de lire le message
                }
            } else {
                displayMessage(data.message, 'error');
            }
        })
        .catch(error => {
            displayMessage('Une erreur est survenue. Veuillez réessayer.', 'error');
        });
    });
});
