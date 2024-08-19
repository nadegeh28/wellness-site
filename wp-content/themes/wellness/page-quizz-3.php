<?php get_header(); ?>

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


<?php get_footer(); ?>



