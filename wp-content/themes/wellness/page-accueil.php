<?php get_header(); ?>


<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
<link href="<?php echo get_stylesheet_directory_uri(); ?>/css/app.css" rel="stylesheet">

<main>
    <section class="hero d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1>Revitalisez votre vie. Maintenant.</h1>
                    <p>Une alimentation équilibrée constitue la santé d'une vie saine, offrant une vitalité renouvelée à chaque repas. De nourrir non seulement le corps mais aussi l'esprit. Transformez une claire matinée en une énergie constante.</p>
                    <a href="#" class="btn btn-primary">Faire le quizz</a>
                </div>
                <div class="col-md-6 text-center">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/photo-page-accueil.png" class="img-fluid" alt="Salad Image">
                </div>
            </div>
        </div>
    </section>

    <section class="recipes py-5">
        <div class="container">
            <h2>Nos Recettes</h2>
            <br> <br>
            <p class="text-center">Découvrez une multitude de recettes personnalisées en fonction de votre régime, déterminé grâce à notre quiz interactif !</p>
            <br>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/muesli.jpg" class="card-img-top" alt="Muesli aux fruits">
                        <div class="card-body">
                            <h5 class="card-title">Muesli aux fruits</h5>
                            <ul class="list-unstyled">
                                <li>100g d'avoine</li>
                                <li>50g de fruits secs</li>
                                <li>1 yaourt nature</li>
                                <li>1 cuillère à soupe de miel</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/curry.jpg" class="card-img-top" alt="Curry de légumes">
                        <div class="card-body">
                            <h5 class="card-title">Curry de légumes</h5>
                            <ul class="list-unstyled">
                                <li>200g de légumes variés</li>
                                <li>100g de pois chiches</li>
                                <li>200ml de lait de coco</li>
                                <li>1 cuillère à soupe de curry</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/wrap.jpg" class="card-img-top" alt="Wrap végétalien">
                        <div class="card-body">
                            <h5 class="card-title">Wrap végétalien</h5>
                            <ul class="list-unstyled">
                                <li>1 tortilla de blé</li>
                                <li>100g de houmous</li>
                                <li>50g de légumes grillés</li>
                                <li>1 poignée de roquette</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-4">
                <a href="#" class="btn btn-secondary">Voir plus de recettes ici</a>
            </div>
        </div>
    </section>

    <section class="services py-5 bg-light">
        <div class="container">
            <h2 class="text-center">Nos Services</h2>
            <div class="row text-center">
                <div class="col-md-3">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/chef-icon.png" class="mb-3" alt="Cuisiner comme un chef">
                    <h5>Cuisiner comme un chef</h5>
                    <p>Apprenez à préparer des petits plats faciles et savoureux. Découvrez des recettes simples pour manger sainement tout en vous régalant !</p>
                </div>
                <div class="col-md-3">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/forum-icon.png" class="mb-3" alt="Forum actif">
                    <h5>Forum actif</h5>
                    <p>Rejoignez notre forum interactif pour échanger avec une communauté passionnée de nutrition. Posez vos questions, partagez vos expériences et découvrez de nouveaux conseils pour une alimentation saine !</p>
                </div>
                <div class="col-md-3">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/quiz-icon.png" class="mb-3" alt="Quizz ultime">
                    <h5>Quizz ultime</h5>
                    <p>Grâce à notre quizz personnalisé, découvrez quel régime est le mieux adapté à vos besoins. Répondez à quelques questions simples et obtenez des recommandations nutritionnelles sur mesure !</p>
                </div>
                <div class="col-md-3">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/evolution-icon.png" class="mb-3" alt="Aperçu de son évolution">
                    <h5>Aperçu de son évolution</h5>
                    <p>Découvrez des informations sur les divers régimes et apprenez-en davantage sur votre métabolisme et votre régime grâce à nos outils interactifs. Adoptez une alimentation adaptée à vos besoins uniques !</p>
                </div>
            </div>
        </div>
    </section>

    <section class="app-promo py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 text-center">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/app-image.png" class="img-fluid" alt="Wellness App">
                </div>
                <div class="col-md-6">
                    <h2>Venez explorer notre application mobile !</h2>
                    <p>Wellness App est bien plus qu'une simple application de nutrition. Découvrez un univers complet dédié à votre bien-être alimentaire. Trouvez des recettes adaptées à vos préférences et besoins nutritionnels spécifiques. Utilisez la version mobile afin de consulter votre progression et les recettes où que vous soyez !</p>
                    <p class="font-weight-bold">Wellness App, votre allié pour une vie saine.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials py-5 bg-light">
        <div class="container">
            <h2 class="text-center">Vos Avis</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card text-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/marie.jpg" class="rounded-circle mb-3" alt="Marie Lopez">
                        <h3>Marie Lopez</h3>
                        <p>Je suis absolument ravi des recettes offertes par Wellness App. Elles sont délicieuses et faciles à préparer. Ma santé s'est améliorée depuis que j'ai commencé à suivre leurs conseils alimentaires.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/tatiana.jpg" class="rounded-circle mb-3" alt="Tatiana Komba">
                        <h3>Tatiana Komba</h3>
                        <p>Wellness App a changé ma vie. Le quizz m'a aidé à comprendre ce dont mon corps a besoin et les recettes sont adaptées à mes besoins spécifiques. Je me sens plus énergique et en meilleure santé.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/alicia.jpg" class="rounded-circle mb-3" alt="Alicia Martinez">
                        <h3>Alicia Martinez</h3>
                        <p>J'adore la variété et la simplicité des recettes de Wellness App. Elles m'ont permis de manger plus sainement sans passer des heures en cuisine. Merci pour cette superbe application !</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<br><br><br><br><br><br><br>

<?php get_footer(); ?>
