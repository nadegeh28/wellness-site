<?php get_header(); ?>

<div class="quizz-container">
    <div class="quizz-title fade-in">
        <h2>Quels types de plats préférez-vous ?</h2>
    </div>
    
    <div class="quizz-form fade-in">
        <form method="post" action="#">
            <ul class="quizz-options">
                <li><input type="radio" name="repas" id="2repas" value="2repas"><label for="2repas">Plats simples et rapides</label></li>
                <li><input type="radio" name="repas" id="3repas" value="3repas"><label for="3repas">Recettes élaborées et variées</label></li>
                <li><input type="radio" name="repas" id="4repas" value="4repas"><label for="4repas">Plats végétariens ou végétaliens</label></li>
                <li><input type="radio" name="repas" id="3repasCollations" value="3repasCollations"><label for="3repasCollations">Plats riches en protéines</label></li>
                <li><input type="radio" name="repas" id="pasRegimeFixe" value="pasRegimeFixe"><label for="pasRegimeFixe">Plats faibles en glucides</label></li>
            </ul>
            <br><br>
            <button type="submit" class="quizz-button">Suivant</button>
        </form>
    </div>

    <div class="quizz-progress fade-in">
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
    </div>
</div>

<?php get_footer(); ?>


