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
    const form = document.getElementById('inscription-form');
    const messageContainer = document.getElementById('message-container');
    
    // Fonction pour valider un champ individuel
    function validateField(field) {
        if (field.value.trim() === '') {
            field.classList.remove('input-valid');
            field.classList.add('input-error');
            return false;
        } else {
            field.classList.remove('input-error');
            field.classList.add('input-valid');
            return true;
        }
    }

    // Fonction pour valider les mots de passe
    function validatePasswords(password, passwordConfirm) {
        if (password.value !== passwordConfirm.value || password.value.trim() === '') {
            password.classList.add('input-error');
            passwordConfirm.classList.add('input-error');
            return false;
        } else {
            password.classList.remove('input-error');
            passwordConfirm.classList.remove('input-error');
            password.classList.add('input-valid');
            passwordConfirm.classList.add('input-valid');
            return true;
        }
    }

    form.addEventListener('submit', function(event) {
        let isValid = true;
        messageContainer.innerHTML = ''; // Clear previous messages

        const fields = ['nom', 'prenom', 'email', 'motdepasse', 'motdepasse-confirm'].map(id => document.getElementById(id));

        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        if (!validatePasswords(fields[3], fields[4])) {
            isValid = false;
            messageContainer.innerHTML = '<div class="error-message">Les mots de passe ne correspondent pas ou sont vides.</div>';
        }

        if (!isValid) {
            event.preventDefault(); // Empêche la soumission du formulaire si les validations échouent
            messageContainer.style.display = 'block';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quizz-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche la soumission du formulaire

            // Obtenir la réponse sélectionnée
            const selectedOption = form.querySelector('input[name="repas"]:checked');

            if (selectedOption) {
                const value = selectedOption.value;

                // Redirection vers la page des résultats avec le paramètre de réponse
                window.location.href = `/page-resultats/?result=${encodeURIComponent(value)}`;
            } else {
                alert('Veuillez sélectionner une option.');
            }
        });
    }

    // Cette section est pour la page des résultats uniquement
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        // Récupérer les données de la réponse depuis l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const resultValue = urlParams.get('result');

        // Déterminer le texte de résultat en fonction de la réponse
        let resultText = '';

        switch (resultValue) {
            case 'reduce-sugar':
                resultText = 'Nous vous recommandons le Régime Sans Sucre.';
                break;
            case 'lose-weight':
                resultText = 'Nous vous recommandons le Régime Perte de poids.';
                break;
            case 'improve-health':
                resultText = 'Nous vous recommandons le Régime MIND.';
                break;
            case 'manage-diabetes':
                resultText = 'Nous vous recommandons le Régime Diabétique.';
                break;
            case 'plant-based':
                resultText = 'Nous vous recommandons le Régime VEGAN.';
                break;
            case 'healthy-simply':
                resultText = 'Nous vous recommandons le Régime Simple.';
                break;
            default:
                resultText = 'Veuillez retourner au quiz et sélectionner une option.';
        }

        // Afficher le texte de résultat
        resultDiv.textContent = resultText;
    }
});

jQuery(document).ready(function($) {
    $('#journal-entry').on('input', function() {
        var entry = $(this).val();
        $.ajax({
            url: ajax_params.ajax_url, // Utilisation de la variable localisée
            type: 'POST',
            data: {
                action: 'save_journal_entry', // Nom de l'action AJAX
                nonce: ajax_params.nonce, // Ajout du nonce pour la sécurité
                entry: entry
            },
            success: function(response) {
                if (response.success) {
                    $('#status-message').text('Enregistré');
                } else {
                    $('#status-message').text('Erreur lors de l\'enregistrement');
                }
            },
            error: function() {
                $('#status-message').text('Erreur lors de l\'enregistrement');
            }
        });
    });
});

