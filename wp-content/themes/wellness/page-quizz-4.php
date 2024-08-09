<?php get_header(); ?>

<div class="quizz-container">
    <h2>Quels types de plats préférez-vous ?</h2>
    
    <form method="post" action="resultats.php">
        <input type="hidden" name="repas1" value="<?php echo htmlspecialchars($_POST['repas1']); ?>">
        <input type="hidden" name="repas2" value="<?php echo htmlspecialchars($_POST['repas2']); ?>">
        <input type="hidden" name="objectif" value="<?php echo htmlspecialchars($_POST['objectif']); ?>">
        <ul class="quizz-options">
            <li><input type="radio" name="plats" id="platsSimples" value="platsSimples"><label for="platsSimples">Plats simples et rapides</label></li>
            <li><input type="radio" name="plats" id="recettesElaborees" value="recettesElaborees"><label for="recettesElaborees">Recettes élaborées et variées</label></li>
            <li><input type="radio" name="plats" id="platsVegetariens" value="platsVegetariens"><label for="platsVegetariens">Plats végétariens ou végétaliens</label></li>
            <li><input type="radio" name="plats" id="platsRichesProteines" value="platsRichesProteines"><label for="platsRichesProteines">Plats riches en protéines</label></li>
            <li><input type="radio" name="plats" id="platsFaiblesGlucides" value="platsFaiblesGlucides"><label for="platsFaiblesGlucides">Plats faibles en glucides</label></li>
        </ul>
        <br><br>
        <a href="/wellness-site/index.php/resultats/" class="quizz-button">Suivant</a>
    </form>

    <div class="quizz-progress">
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
    </div>
</div>

<?php get_footer(); ?>
