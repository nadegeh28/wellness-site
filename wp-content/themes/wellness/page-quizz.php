<?php get_header(); ?>

<div class="quizz-container">
    <div class="quizz-title fade-in">
        <h2>Combien de repas prenez-vous par jour ?</h2>
    </div>

    <div class="quizz-form fade-in">
        <form method="post" action="#">
            <ul class="quizz-options">
                <li><input type="radio" name="repas" id="2repas" value="2repas"><label for="2repas">2 repas</label></li>
                <li><input type="radio" name="repas" id="3repas" value="3repas"><label for="3repas">3 repas</label></li>
                <li><input type="radio" name="repas" id="4repas" value="4repas"><label for="4repas">4 repas ou plus</label></li>
                <li><input type="radio" name="repas" id="3repasCollations" value="3repasCollations"><label for="3repasCollations">3 repas avec des collations</label></li>
                <li><input type="radio" name="repas" id="pasRegimeFixe" value="pasRegimeFixe"><label for="pasRegimeFixe">Pas de régime fixe</label></li>
            </ul>
            <br><br>
            <a href="/wellness-site/index.php/quizz-2/" class="quizz-button">Suivant</a>
        </form>
    </div>

    <div class="quizz-progress fade-in">
        <span class="progress-dot active"></span>
        <span class="progress-dot"></span>
        <span class="progress-dot"></span>
        <span class="progress-dot"></span>
    </div>
</div>

<?php get_footer(); ?>

