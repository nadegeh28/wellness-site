<?php get_header(); ?>

<div class="quizz-container fade-in">
    <h2 class="fade-in">Quelle est votre principale source de protéines ?</h2>
    
    <form method="post" action="/wellness-site/index.php/quizz-3/" class="fade-in">

        <ul class="quizz-options fade-in">
            <li><input type="radio" name="repas" id="2repas" value="2repas"><label for="2repas">Viande et poisson</label></li>
            <li><input type="radio" name="repas" id="3repas" value="3repas"><label for="3repas">Légumes et fruits</label></li>
            <li><input type="radio" name="repas" id="4repas" value="4repas"><label for="4repas">Tofu et légumineuses</label></li>
            <li><input type="radio" name="repas" id="3repasCollations" value="3repasCollations"><label for="3repasCollations">Produits laitiers et œufs</label></li>
            <li><input type="radio" name="repas" id="pasRegimeFixe" value="pasRegimeFixe"><label for="pasRegimeFixe">Mélange de sources variées</label></li>
        </ul>
        <br><br>
        <button type="submit" class="quizz-button fade-in">Suivant</button>

    </form>

    <div class="quizz-progress fade-in">
        <span class="progress-dot active"></span>
        <span class="progress-dot active"></span>
        <span class="progress-dot"></span>
        <span class="progress-dot"></span>
    </div>
</div>

<?php get_footer(); ?>

        
        
        