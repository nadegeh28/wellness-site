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
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-11.png" alt="Muesli aux fruits">
                <h3>Muesli aux fruits</h3>
                <ul>
                    <li>100g de floconsavoine</li>
                    <li>50g d’amandes, de noisettes</li>
                    <li>15g de miel</li>
                    <li>Fruits frais (au choix)</li>
                    <li>150g de yaourt frais</li>
                    <li>2 cuillères à soupe de miel</li>
                    <li>2 cuillères à soupe de miel</li>
                    <li>1 pincée de canelle</li>
                </ul>
                <p class="prep">Préparation : 10 min</p>
            </div>
            <div class="recipe-card">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Curry de légumes</h3>
                <ul>
                    <li>400g de légumes assortis</li>
                    <li>1 oignon</li>
                    <li>2 gousses d'ail</li>
                    <li>1 cuillère à café de gingembre</li>
                    <li>2 tomates</li>
                    <li>400ml de lait de coco</li>
                    <li>3 cuillère de pâtes de curry</li>
                </ul>
                <p class="prep">Préparation : 30 min</p>
            </div>
            <div class="recipe-card">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Wrap végétalien</h3>
                <ul>
                    <li>1 grande tortilla de blé complet</li>
                    <li>1/2 avocat mûr</li>
                    <li>1/2 poivron rouge</li>
                    <li>1 carotte rapée</li>
                    <li>1 feuille de salade</li>
                    <li>30g cuillère à soupe de houmous</li>
                    <li>1 cuillère à soupe de jus de citron</li>
                </ul>
                <p class="prep">Préparation : 15 min</p>
            </div>
        </div>
    </section>

    <section class="services">
        <h2>Nos Services</h2>
        <div class="services-list">
            <div class="service-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/service-icon-1.png" alt="Cuisiner comme un chef">
                <h3>Cuisiner comme un chef</h3>
                <p>Apprenez à préparer des petits plats faciles et savoureux. Découvrez des recettes simples pour manger sainement tout en vous régalant!</p>
            </div>
            <div class="service-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/service-icon-2.png" alt="Forum actif">
                <h3>Forum actif</h3>
                <p>Rejoignez notre forum interactif pour échanger avec une communauté passionnée de nutrition. Posez vos questions, partagez vos expériences et découvrez de nouveaux conseils pour une alimentation saine!</p>
            </div>
            <div class="service-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/service-icon-3.png" alt="Quizz ultime">
                <h3>Quizz ultime</h3>
                <p>Grâce à notre quiz personnalisé, découvrez quel régime est le mieux adapté à vos besoins. Répondez à quelques questions simples et obtenez des recommandations nutritionnelles sur mesure!</p>
            </div>
            <div class="service-item">
                <img src="<?php echo get_template_directory_uri(); ?>/images/service-icon-4.png" alt="Aperçu de son évolution">
                <h3>Aperçu de son évolution</h3>
                <p>Découvrez des informations sur les divers régimes et apprenez-en davantage sur vous-même et votre régime grâce à nos outils interactifs. Adoptez une alimentation adaptée à vos besoins uniques!</p>
            </div>
        </div>
    </section>

    <section class="app-promotion">
        <img src="<?php echo get_template_directory_uri(); ?>/images/mobile-app.png" alt="Mobile App">
        <div class="app-text">
            <h2>Venez explorer notre application mobile!</h2>
            <p>Wellness App est bien plus qu’une simple application de nutrition. Découvrez un univers complet dédié à votre bien-être alimentaire. Trouvez des recettes adaptées à vos préférences et besoins nutritionnels spécifiques. Utilisez la version mobile afin de consulter votre progression et les recettes où que vous soyez!</p>
            <p><strong>Wellness App, votre allié pour une vie saine.</strong></p>
        </div>
    </section>

    <section class="testimonials">
        <h2>Vos Avis</h2>
        <div class="testimonials-list">
            <div class="testimonial">
                <img src="<?php echo get_template_directory_uri(); ?>/images/user-1.jpg" alt="Marie Lopez">
                <h3>Marie Lopez</h3>
                <p>Le site de Wellness m’a aidé à trouver le régime parfait pour moi. Les recettes sont délicieuses et faciles à préparer, et j’adore la communauté du forum. J’ai également commencé à utiliser l’application mobile et je la trouve extrêmement pratique pour suivre ma progression.</p>
            </div>
            <div class="testimonial">
                <img src="<?php echo get_template_directory_uri(); ?>/images/user-2.jpg" alt="Tatiana Komba">
                <h3>Tatiana Komba</h3>
                <p>Wellness est une véritable découverte pour moi. Les services offerts sont variés et très utiles, en particulier le quiz qui m’a permis de mieux comprendre mes besoins nutritionnels. Je recommande vivement!</p>
            </div>
            <div class="testimonial">
                <img src="<?php echo get_template_directory_uri(); ?>/images/user-3.jpg" alt="Alicia Martinez">
                <h3>Alicia Martinez</h3>
                <p>J’ai été ravie de découvrir Wellness. La diversité des recettes et des conseils m’a beaucoup aidé à adopter une alimentation plus saine. L’application mobile est un plus indéniable pour suivre mon régime au quotidien.</p>
            </div>
        </div>
    </section>
</div>

<?php
get_footer();
?>
