<?php get_header();?>

<div class="home-container">
    <section class="hero">
        <div class="hero-text">
            <h1 class="part1">Revitalisez votre vie.</h1>  <h1 class="part2">Maintenant.</h1>
            <p>Une alimentation équilibrée constitue la santé d’une vie saine, offrant une vitalité renouvelée à chaque repas. De nombreux avantages pour la santé sont à l’esprit. Sentez-vous bien clair mental et aimé d'énergie constante.</p>
            <a href="#" class="hero-button">Faire le quiz</a>
        </div>
        <div class="hero-image">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/photo-page-accueil.png" alt="Salade">
        </div>
    </section>

    <section class="recipes">
        <h2>Nos Recettes</h2>
        <p class="textec">Découvrez une multitude de recettes personnalisées en fonction de votre régime, déterminé grâce à notre quiz interactif !</p>
        <div class="recipe-cards">
            <div class="recipe-card">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-11.png" alt="Muesli aux fruits" class="repas">
<h3>Muesli aux fruits</h3>
<img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                <p class="ingredients">100g de floconsavoine</p>
                    <p class="ingredients">50g d’amandes, de noisettes</p>
                    <p class="ingredients">15g de miel</p>
                    <p class="ingredients">Fruits frais (au choix)</p>
                    <p class="ingredients">150g de yaourt frais</p>
                    <p class="ingredients">2 cuillères à soupe de miel</p>
                    <p class="ingredients">2 cuillères à soupe de miel</p>
                    <p class="ingredients">1 pincée de canelle</p>
                <p class="prep">Préparation : 10 min</p>
            </div>
            <div class="recipe-card">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Curry de légumes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">400g de légumes assortis</p>
                    <p class="ingredients">1 oignon</p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">1 cuillère à café de gingembre</p>
                    <p class="ingredients">2 tomates</p>
                    <p class="ingredients">400ml de lait de coco</p>
                    <p class="ingredients">3 cuillère de pâtes de curry</p>

                <p class="prep">Préparation : 30 min</p>
            </div>
            <div class="recipe-card">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Wrap végétalien</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">1 grande tortilla de blé complet</p>
                    <p class="ingredients">1/2 avocat mûr</p>
                    <p class="ingredients">1/2 poivron rouge</p>
                    <p class="ingredients">1 carotte rapée</p>
                    <p class="ingredients">1 feuille de salade</p>
                    <p class="ingredients">30g cuillère à soupe de houmous</p>
                    <p class="ingredients">1 cuillère à soupe de jus de citron</p>
                <p class="prep">Préparation : 15 min</p>
            </div>
        </div>
        <p class="phrasrecettes">Voir plus de recettes <a href="#" class="seereceipe">ici</a></p>
    </section>

    <section class="services">
        <h2>Nos Services</h2>
        <div class="services-list">
            <div class="service-item">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/chef2.png" alt="Cuisiner comme un chef">
                <h3 class="services">Cuisiner comme un chef</h3>
                <p>Apprenez à préparer des petits plats faciles et savoureux. Découvrez des recettes simples pour manger sainement tout en vous régalant!</p>
            </div>
            <div class="service-item">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/forum2.png" alt="Forum actif">
                <h3 class="services">Forum actif</h3>
                <p>Rejoignez notre forum interactif pour échanger avec une communauté passionnée de nutrition. Posez vos questions, partagez vos expériences et découvrez de nouveaux conseils pour une alimentation saine!</p>
            </div>
            <div class="service-item">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/quizzic.png" alt="Quizz ultime" class="quizzic">
                <h3 class="services">Quizz ultime</h3>
                <p>Grâce à notre quiz personnalisé, découvrez quel régime est le mieux adapté à vos besoins. Répondez à quelques questions simples et obtenez des recommandations nutritionnelles sur mesure!</p>
            </div>
            <div class="service-item">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/progricone.png" alt="Aperçu de son évolution">
                <h3 class="services">Aperçu de son évolution</h3>
                <p>Découvrez des informations sur les divers régimes et apprenez-en davantage sur vous-même et votre régime grâce à nos outils interactifs. Adoptez une alimentation adaptée à vos besoins uniques!</p>
            </div>
        </div>
    </section>

    <section class="app-promotion">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/tel.png" alt="Mobile App">
        <div class="app-text">
            <h2 class="part1">Venez explorer </h2><h2 class="part2">notre application mobile!</h2>
            <p>Wellness App est bien plus qu’une simple application de nutrition. Découvrez un univers complet dédié à votre bien-être alimentaire. Trouvez des recettes adaptées à vos préférences et besoins nutritionnels spécifiques. Utilisez la version mobile afin de consulter votre progression et les recettes où que vous soyez!</p>
            <p><strong>Wellness App, votre allié pour une vie saine.</strong></p>
        </div>
    </section>

    <section class="testimonials">
        <h2>Vos Avis</h2>
        <br><br>
        <div class="testimonials-list">
            <div class="testimonial">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user1.jpg" alt="Marie Lopez" class="userpic">
                <h6 class="avistitlte">Marie Lopez</h6>
                <h6 class="avistitlte">29 ans</h6>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/etoiles.png" alt="stars" class="etoiles">

                <p>Le site de Wellness m’a aidé à trouver le régime parfait pour moi. Les recettes sont délicieuses et faciles à préparer, et j’adore la communauté du forum. J’ai également commencé à utiliser l’application mobile et je la trouve extrêmement pratique pour suivre ma progression.</p>
            </div>
            <div class="testimonial">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user2.jpg" alt="Marie Lopez" class="userpic">
                <h6 class="avistitlte">Tatiana Lauren</h6>
                <h6 class="avistitlte">45 ans</h6>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                <p>Wellness est une véritable découverte pour moi. Les services offerts sont variés et très utiles, en particulier le quiz qui m’a permis de mieux comprendre mes besoins nutritionnels. Je recommande vivement!</p>
            </div>
            <div class="testimonial">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user3.jpg" alt="Marie Lopez" class="userpic">
                <h6 class="avistitlte">Alicia Martinez</h6>
                <h6 class="avistitlte">52 ans</h6>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                <p>J’ai été ravie de découvrir Wellness. La diversité des recettes et des conseils m’a beaucoup aidé à adopter une alimentation plus saine. L’application mobile est un plus indéniable pour suivre mon régime au quotidien.</p>
            </div>
        </div>
    </section>
</div>

<br><br><br><br><br><br><br><br><br>

<?php get_footer();?>
