<?php get_header(); ?>

<div class="blog-container fade-in">
    <h1 class="part1">Explorez notre blog pour des conseils, </h1>
    <h1 class="part2">des recettes, et bien plus encore !</h1>

    <div class="articles-grid">
        <?php
        $articles = [
            [
                'link' => 'http://localhost:8888/wellness-site/index.php/article-1/',
                'img_src' => get_template_directory_uri() . '/assets/img/article-1.jpg',
                'alt' => 'Les Avantages et Défis du Régime Vegan',
                'title' => 'Les Avantages et Défis du Régime Vegan : Une Analyse Approfondie',
                'class' => 'special-article-1'
            ],
            [
                'link' => 'http://localhost:8888/wellness-site/index.php/article-2/',
                'img_src' => get_template_directory_uri() . '/assets/img/article-2.jpg',
                'alt' => 'La Motivation pour Adopter un Régime',
                'title' => 'La Motivation pour Adopter un Régime : Stratégies et Conseils pour Réussir'
            ],
            [
                'link' => 'http://localhost:8888/wellness-site/index.php/article-3/',
                'img_src' => get_template_directory_uri() . '/assets/img/article-3.jpg',
                'alt' => 'Les Bienfaits des Super-Aliments',
                'title' => 'Les Bienfaits des Super-Aliments : Pourquoi Vous Devriez les Inclure dans Votre Régime'
            ],
            [
                'link' => 'http://localhost:8888/wellness-site/index.php/article-4/',
                'img_src' => get_template_directory_uri() . '/assets/img/article-4.jpg',
                'alt' => 'Les 7 Bienfaits de Faire un Régime',
                'title' => 'Les 7 Bienfaits de Faire un Régime : Pourquoi Adopter une Alimentation Contrôlée ?'
            ],
            [
                'link' => 'http://localhost:8888/wellness-site/index.php/article-5/',
                'img_src' => get_template_directory_uri() . '/assets/img/article-5.jpg',
                'alt' => 'L\'Importance de Cuisiner Soi-Même à la Maison',
                'title' => 'L\'Importance de Cuisiner Soi-Même à la Maison : Pourquoi la Cuisine Maison est Cruciale pour Votre Santé et Votre Bien-Être',
                'class' => 'special-article-5'
            ],
        ];

        // Boucle à travers les articles et affichage
        foreach ($articles as $article) {
            $class = isset($article['class']) ? $article['class'] : '';
            ?>
            <a href="<?php echo $article['link']; ?>" class="article-card <?php echo $class; ?>">
                <img src="<?php echo $article['img_src']; ?>" alt="<?php echo $article['alt']; ?>" class="imageblog2">
                <p><?php echo $article['title']; ?></p>
            </a>
            <?php
        }
        ?>
    </div>
</div>

<?php get_footer(); ?>
