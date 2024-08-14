<?php get_header();?>

<div class="fade-in home-container">
    <section class="hero fade-in">
        <div class="hero-text fade-in">
            <h1 class="part1 fade-in">Revitalisez votre vie.</h1>
            <h1 class="part2 fade-in">Maintenant.</h1>
            <p class="fade-in">Une alimentation équilibrée constitue la santé d’une vie saine, offrant une vitalité renouvelée à chaque repas. De nombreux avantages pour la santé sont à l’esprit. Sentez-vous bien clair mental et aimé d'énergie constante.</p>
            <a href="#" class="hero-button fade-in">Faites le quiz</a>
        </div>
        <div class="hero-image fade-in">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/photo-page-accueil.png" alt="Salade">
        </div>
    </section>

    <section class="recipes fade-in">
        <h2 class="fade-in">Nos Recettes</h2>
        <p class="textec fade-in">Découvrez une multitude de recettes personnalisées en fonction de votre régime, déterminé grâce à notre quiz interactif !</p>
        <div class="recipe-cards fade-in">
            <div class="recipe-card fade-in">
                <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-11.png" alt="Muesli aux fruits" class="repas">
                <h3 class="fade-in">Muesli aux fruits</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                <p class="ingredients fade-in">100g de flocons avoine</p>
                <p class="ingredients fade-in">50g d’amandes, de noisettes</p>
                <p class="ingredients fade-in">15g de miel</p>
                <p class="ingredients fade-in">Fruits frais (au choix)</p>
                <p class="ingredients fade-in">150g de yaourt frais</p>
                <p class="ingredients fade-in">2 cuillères à soupe de miel</p>
                <p class="ingredients fade-in">1 pincée de canelle</p>
                <p class="prep fade-in">Préparation : 10 min</p>
            </div>
            <div class="recipe-card fade-in">
                <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3 class="fade-in">Curry de légumes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                <p class="ingredients fade-in">400g de légumes assortis</p>
                <p class="ingredients fade-in">1 oignon</p>
                <p class="ingredients fade-in">2 gousses d'ail</p>
                <p class="ingredients fade-in">1 cuillère à café de gingembre</p>
                <p class="ingredients fade-in">2 tomates</p>
                <p class="ingredients fade-in">400ml de lait de coco</p>
                <p class="ingredients fade-in">3 cuillère de pâtes de curry</p>
                <p class="prep fade-in">Préparation : 30 min</p>
            </div>
            <div class="recipe-card fade-in">
                <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3 class="fade-in">Wrap végétalien</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                <p class="ingredients fade-in">1 grande tortilla de blé complet</p>
                <p class="ingredients fade-in">1/2 avocat mûr</p>
                <p class="ingredients fade-in">1/2 poivron rouge</p>
                <p class="ingredients fade-in">1 carotte rapée</p>
                <p class="ingredients fade-in">1 feuille de salade</p>
                <p class="ingredients fade-in">30g cuillère à soupe de houmous</p>
                <p class="ingredients fade-in">1 cuillère à soupe de jus de citron</p>
                <p class="prep fade-in">Préparation : 15 min</p>
            </div>
        </div>
        <p class="phrasrecettes fade-in">Voir plus de recettes <a href="#" class="seereceipe fade-in">ici</a></p>
    </section>

    <section class="services fade-in">
        <h2 class="fade-in">Nos Services</h2>
        <div class="services-list fade-in">
            <div class="service-item fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/chef2.png" alt="Cuisiner comme un chef">
                <h3 class="services fade-in">Cuisiner comme un chef</h3>
                <p class="fade-in">Apprenez à préparer des petits plats faciles et savoureux. Découvrez des recettes simples pour manger sainement tout en vous régalant!</p>
            </div>
            <div class="service-item fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/forum2.png" alt="Forum actif">
                <h3 class="services fade-in">Forum actif</h3>
                <p class="fade-in">Rejoignez notre forum interactif pour échanger avec une communauté passionnée de nutrition. Posez vos questions, partagez vos expériences et découvrez de nouveaux conseils pour une alimentation saine!</p>
            </div>
            <div class="service-item fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/quizzic.png" alt="Quizz ultime" class="quizzic">
                <h3 class="services fade-in">Quizz ultime</h3>
                <p class="fade-in">Grâce à notre quiz personnalisé, découvrez quel régime est le mieux adapté à vos besoins. Répondez à quelques questions simples et obtenez des recommandations nutritionnelles sur mesure!</p>
            </div>
            <div class="service-item fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/progricone.png" alt="Aperçu de son évolution">
                <h3 class="services fade-in">Aperçu de son évolution</h3>
                <p class="fade-in">Découvrez des informations sur les divers régimes et apprenez-en davantage sur vous-même et votre régime grâce à nos outils interactifs. Adoptez une alimentation adaptée à vos besoins uniques!</p>
            </div>
        </div>
    </section>

    <section class="app-promotion fade-in">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/tel.png" alt="Mobile App">
        <div class="app-text fade-in">
            <h2 class="part1 fade-in">Venez explorer</h2>
            <h2 class="part2 fade-in">notre application mobile!</h2>
            <p class="fade-in">Wellness App est bien plus qu’une simple application de nutrition. Découvrez un univers complet dédié à votre bien-être alimentaire. Trouvez des recettes adaptées à vos préférences et besoins nutritionnels spécifiques. Utilisez la version mobile afin de consulter votre progression et les recettes où que vous soyez!</p>
            <p class="fade-in"><strong>Wellness App, votre allié pour une vie saine.</strong></p>
        </div>
    </section>

    <section class="testimonials fade-in">
        <h2 class="fade-in">Vos Avis</h2>
        <br><br>
        <div class="testimonials-list fade-in">
            <div class="testimonial fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user1.jpg" alt="Marie Lopez" class="userpic fade-in">
                <h6 class="avistitlte fade-in">Marie Lopez</h6>
                <h6 class="avistitlte fade-in">29 ans</h6>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/etoiles.png" alt="stars" class="etoiles fade-in">

                <p class="fade-in">Le site de Wellness m’a aidé à trouver le régime parfait pour moi. Les recettes sont délicieuses et faciles à préparer, et j’adore la communauté du forum. J’ai également commencé à utiliser l’application mobile et je la trouve extrêmement pratique pour suivre ma progression.</p>
            </div>
            <div class="testimonial fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user2.jpg" alt="Tatiana Lauren" class="userpic fade-in">
                <h6 class="avistitlte fade-in">Tatiana Lauren</h6>
                <h6 class="avistitlte fade-in">45 ans</h6>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles fade-in">
                <p class="fade-in">Wellness est une véritable découverte pour moi. Les services offerts sont variés et très utiles, en particulier le quiz qui m’a permis de mieux comprendre mes besoins nutritionnels. Je recommande vivement!</p>
            </div>
            <div class="testimonial fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user3.jpg" alt="Alicia Martinez" class="userpic fade-in">
                <h6 class="avistitlte fade-in">Alicia Martinez</h6>
                <h6 class="avistitlte fade-in">52 ans</h6>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles fade-in">
                <p class="fade-in">J’ai été ravie de découvrir Wellness. La diversité des recettes et des conseils m’a beaucoup aidé à adopter une alimentation plus saine. L’application mobile est un plus indéniable pour suivre mon régime au quotidien.</p>
            </div>
        </div>
    </section>
</div>

<br><br><br><br><br><br><br><br><br>
</div>
</main>

<?php get_footer();?>
