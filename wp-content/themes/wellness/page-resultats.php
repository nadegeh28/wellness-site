<?php
/* Template Name: Page Résultats */
get_header(); ?>

<div class="quizz-results-container">
    <div class="quizz-title fade-in">
        <h2>Votre Résultat</h2>
    </div>

    <div class="quizz-form fade-in">
        <!-- Affichage du résultat -->
        <div id="result"></div>
    </div>

    <div class="quizz-progress fade-in">
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const resultDiv = document.getElementById('result');

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
});
</script>

<?php get_footer(); ?>




