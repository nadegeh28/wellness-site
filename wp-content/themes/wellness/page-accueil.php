<?php get_header(); ?>

<form id="HomePage" action="http://localhost:8888/wellness-site/index.php/accueil/" method="post">

<h1>Revitalisez votre vie. Maintenant.</h1>
    <p>Une alimentation équilibrée constitue la santé d'une vie saine, offrant une vitalité renouvelée à chaque repas. Découvrez nos recettes!</p>
    <button>Prendre le quiz</button>

    <div class="recipes">
    <div class="recipe">
        <h3>Muesli aux fruits</h3>
        <p>Recette: 100g d'avoine, 50g de fruits, 200ml de yaourt...</p>
    </div>
    <div class="recipe">
        <h3>Curry de légumes</h3>
        <p>Recette: 200g de légumes, 100g de riz, épices...</p>
    </div>
    <div class="recipe">
        <h3>Wrap végétalien</h3>
        <p>Recette: Tortilla, légumes, houmous...</p>
    </div>
</div>

<div class="services">
    <div class="service">
        <img class="service-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/images/chef-icon.png" alt="Cuisiner comme un chef">
        <h3>Cuisiner comme un chef</h3>
        <p>Apprenez à préparer des petits plats faciles et savoureux.</p>
    </div>
    <div class="service">
        <img class="service-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/images/forum-icon.png" alt="Forum actif">
        <h3>Forum actif</h3>
        <p>Rejoignez notre forum pour échanger avec notre communauté.</p>
    </div>
    <div class="service">
        <img class="service-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/images/quiz-icon.png" alt="Quizz ultime">
        <h3>Quizz ultime</h3>
        <p>Découvrez quel régime est adapté à vos besoins.</p>
    </div>
    <div class="service">
        <img class="service-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/images/progress-icon.png" alt="Aperçu de son évolution">
        <h3>Aperçu de son évolution</h3>
        <p>Suivez vos progrès et adaptez votre alimentation.</p>
    </div>
</div>

<div class="mobile-app">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/mobile-app-image.png" alt="Mobile App">
    <h3>Venez explorer notre application mobile!</h3>
    <p>Découvrez des recettes adaptées à vos préférences et besoins.</p>
</div>

<div class="testimonials">
    <div class="testimonial">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/testimonial1.jpg" alt="Marie Lopez">
        <h4>Marie Lopez</h4>
        <p>Les recettes sont variées et faciles à préparer.</p>
    </div>
    <div class="testimonial">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/testimonial2.jpg" alt="Tatiana Komba">
        <h4>Tatiana Komba</h4>
        <p>Le forum est très actif et j'ai appris beaucoup de choses.</p>
    </div>
    <div class="testimonial">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/testimonial3.jpg" alt="Alicia Martinez">
        <h4>Alicia Martinez</h4>
        <p>J'ai trouvé le régime parfait pour moi grâce au quiz.</p>
    </div>
</div>

<?php get_footer(); ?>