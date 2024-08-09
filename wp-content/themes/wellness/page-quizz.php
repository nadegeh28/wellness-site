<?php get_header(); ?>

<div class="quizz-container">
    <h2>Quel est votre principal objectif de santé ?</h2>
    
    <form method="post" action="quizz-2.php">
        <input type="hidden" name="repas1" value="<?php echo htmlspecialchars($_POST['repas1']); ?>">
        <input type="hidden" name="repas2" value="<?php echo htmlspecialchars($_POST['repas2']); ?>">
        <ul class="quizz-options">
            <li><input type="radio" name="objectif" id="reduireSucre" value="reduireSucre"><label for="reduireSucre">Réduire le sucre de mon alimentation</label></li>
            <li><input type="radio" name="objectif" id="perdrePoids" value="perdrePoids"><label for="perdrePoids">Perdre du poids</label></li>
            <li><input type="radio" name="objectif" id="ameliorerSante" value="ameliorerSante"><label for="ameliorerSante">Améliorer ma santé</label></li>
            <li><input type="radio" name="objectif" id="gererDiabete" value="gererDiabete"><label for="gererDiabete">Gérer mon diabète</label></li>
            <li><input type="radio" name="objectif" id="regimePlantes" value="regimePlantes"><label for="regimePlantes">Adopter un régime basé sur les plantes</label></li>
        </ul>
        <br><br>
        <a href="/wellness-site/index.php/quizz-2/" class="quizz-button">Suivant</a>
    </form>

    <div class="quizz-progress">
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot"></span>
    </div>
</div>

<?php get_footer(); ?>