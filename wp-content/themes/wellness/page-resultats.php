
<?php
get_header();

// Récupérer les réponses
$repas1 = isset($_POST['repas1']) ? htmlspecialchars($_POST['repas1']) : '';
$repas2 = isset($_POST['repas2']) ? htmlspecialchars($_POST['repas2']) : '';
$objectif = isset($_POST['objectif']) ? htmlspecialchars($_POST['objectif']) : '';
$plats = isset($_POST['plats']) ? htmlspecialchars($_POST['plats']) : '';

// Logique pour déterminer le régime
$regime = '';

if ($repas1 == 'pasRegimeFixe') {
    $regime = 'Régime équilibré';
} else if ($repas1 == 'regimePlantes') {
    if ($repas2 == 'tofuLegumineuses' || $repas2 == 'legumesFruits') {
        $regime = 'Végétalien ou végétarien';
    } else {
        $regime = 'Régime végétarien';
    }
} else {
    $regime = 'Autre régime';
}
?>

<div class="quizz-container">
    <h2>Vos résultats :</h2>
    <p><strong>Régime recommandé :</strong> <?php echo $regime; ?></p>
</div>




<?php get_footer(); ?>
