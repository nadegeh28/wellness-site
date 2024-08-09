<?php get_header(); ?>

<div class="quizz-container">
    <h2>Quelle est votre principale source de protéines ?</h2>
    
    <form method="post" action="quizz-3.php">
        <input type="hidden" name="repas1" value="<?php echo htmlspecialchars($_POST['repas1']); ?>">
        <ul class="quizz-options">
            <li><input type="radio" name="repas2" id="viandePoisson" value="viandePoisson"><label for="viandePoisson">Viande et poisson</label></li>
            <li><input type="radio" name="repas2" id="legumesFruits" value="legumesFruits"><label for="legumesFruits">Légumes et fruits</label></li>
            <li><input type="radio" name="repas2" id="tofuLegumineuses" value="tofuLegumineuses"><label for="tofuLegumineuses">Tofu et légumineuses</label></li>
            <li><input type="radio" name="repas2" id="produitsLaitiers" value="produitsLaitiers"><label for="produitsLaitiers">Produits laitiers et œufs</label></li>
            <li><input type="radio" name="repas2" id="sourcesVariees" value="sourcesVariees"><label for="sourcesVariees">Mélange de sources variées</label></li>
        </ul>
        <br><br>
        <a href="/wellness-site/index.php/quizz-3/" class="quizz-button">Suivant</a>
    </form>

    <div class="quizz-progress">
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot"></span>
        <span class="progress-dot"></span>
    </div>
</div>

<?php get_footer(); ?>
