<?php get_header(); ?>

<div class="quizz-container">
    <h2>Quel est votre principal objectif de santé ?</h2>
    
    <form method="post" action="#">
        <ul class="quizz-options">
            <li><input type="radio" name="repas" id="2repas" value="2repas"><label for="2repas">Réduire le sucre de mon alimentation</label></li>
            <li><input type="radio" name="repas" id="3repas" value="3repas"><label for="3repas">Perdre du poids</label></li>
            <li><input type="radio" name="repas" id="4repas" value="4repas"><label for="4repas">Améliorer ma santé</label></li>
            <li><input type="radio" name="repas" id="3repasCollations" value="3repasCollations"><label for="3repasCollations">Gérer mon diabète</label></li>
            <li><input type="radio" name="repas" id="pasRegimeFixe" value="pasRegimeFixe"><label for="pasRegimeFixe">Adopter un régime basé sur les plantes</label></li>
        </ul>
        <br><br>
        <a href="/wellness-site/index.php/quizz-4/" class="quizz-button">Suivant</a>

    </form>

    <div class="quizz-progress">
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot"></span>
    </div>
</div>

<?php get_footer(); ?>