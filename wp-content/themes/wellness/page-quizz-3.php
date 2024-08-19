<?php
/* Template Name: Page de Quiz */
get_header(); ?>

<div class="quizz-container">
    <div class="quizz-title fade-in">
        <h2>Quel est votre principal objectif de santé ?</h2>
    </div>

    <div class="quizz-form fade-in">
        <form id="quizz-form" method="post">
            <ul class="quizz-options">
                <li>
                    <input type="radio" name="repas" id="reduce-sugar" value="reduce-sugar">
                    <label for="reduce-sugar">Réduire le sucre de mon alimentation</label>
                </li>
                <li>
                    <input type="radio" name="repas" id="lose-weight" value="lose-weight">
                    <label for="lose-weight">Perdre du poids</label>
                </li>
                <li>
                    <input type="radio" name="repas" id="improve-health" value="improve-health">
                    <label for="improve-health">Améliorer ma santé</label>
                </li>
                <li>
                    <input type="radio" name="repas" id="manage-diabetes" value="manage-diabetes">
                    <label for="manage-diabetes">Gérer mon diabète</label>
                </li>
                <li>
                    <input type="radio" name="repas" id="plant-based" value="plant-based">
                    <label for="plant-based">Adopter un régime basé sur les plantes</label>
                </li>
                <li>
                    <input type="radio" name="repas" id="healthy-simply" value="healthy-simply">
                    <label for="healthy-simply">Manger sainement simplement</label>
                </li>
            </ul>
            <br><br>
            <button type="submit" id="submit-button" class="quizz-button">Suivant</button>
        </form>
    </div>

    <div class="quizz-progress fade-in">
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot"></span>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quizz-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission du formulaire

        // Obtenir la réponse sélectionnée
        const selectedOption = form.querySelector('input[name="repas"]:checked');

        if (selectedOption) {
            const value = selectedOption.value;

            // Redirection vers la page des résultats avec le paramètre de réponse
            window.location.href = 'http://localhost:8888/wellness-site/index.php/resultats/?result=' + encodeURIComponent(value);
        } else {
            alert('Veuillez sélectionner une option.');
        }
    });
});
</script>

<?php get_footer(); ?>






