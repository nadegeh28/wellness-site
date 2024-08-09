<?php get_header(); ?>

<div class="quizz-container">
    <h2>Vos résultats :</h2>
    <?php
    // Vérification et assignation des réponses du formulaire
    $repas1 = isset($_POST['repas1']) ? $_POST['repas1'] : '';
    $repas2 = isset($_POST['repas2']) ? $_POST['repas2'] : '';
    $objectif = isset($_POST['objectif']) ? $_POST['objectif'] : '';
    $plats = isset($_POST['plats']) ? $_POST['plats'] : '';

    // Logique pour déterminer le régime
    $regime = '';

    if ($repas1 == 'pasRegimeFixe') {
        $regime = 'Régime simple';
    } elseif ($objectif == 'reduireSucre') {
        $regime = 'Régime sans sucre';
    } elseif ($objectif == 'gererDiabete') {
        $regime = 'Régime diabétique';
    } elseif ($objectif == 'perdrePoids') {
        $regime = 'Régime perte de poids';
    } elseif ($repas2 == 'tofuLegumineuses' || $plats == 'platsVegetariens') {
        $regime = 'Régime végane';
    } elseif ($objectif == 'ameliorerSante' && $plats == 'platsRichesProteines') {
        $regime = 'Régime mind';
    } else {
        // Si aucune condition spécifique n'est remplie, choisir un régime par défaut
        // par exemple, on peut assigner "Régime simple" ou un autre régime par défaut.
        $regime = 'Régime simple';
    }

    // Affichage du résultat avec protection XSS
    echo "<p>Votre régime recommandé est : <strong>" . htmlspecialchars($regime) . "</strong></p>";
    ?>
</div>

<?php get_footer(); ?>
