<?php
/* Template Name: Page Résultats */
get_header(); ?>
<?php
/* Template Name: Page Résultats */
get_header(); ?>

<div class="quizz-results-container">

    <div class="logo-container">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logowelleness.png" alt="Wellness Logo" class="img-fluid" style="width: 180px; border-radius: 100px;">
    </div>
<br>
    <div class="quizz-title fade-in">
        <p class="titleresult">Votre Résultat</p>
    </div>

    <div class="quizz-form fade-in">
        <!-- Affichage du résultat -->
        <div id="result"></div>
    </div>

    <p class="phrreg">Voir plus plus d'information <a href="http://localhost:8888/wellness-site/index.php/regimes" class="voirreg">ici</a></p>
   
    
    <div class="quizz-progress fade-in">
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
    </div>
</div>

<?php get_footer(); ?>


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




