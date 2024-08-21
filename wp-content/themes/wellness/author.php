<?php
get_header(); // Inclure l'en-tête du thème

// Récupérer les informations de l'auteur ou de l'utilisateur connecté
$author = is_author() ? get_queried_object() : wp_get_current_user();
$user_meta = get_user_meta($author->ID);

// Vérifier si l'utilisateur est connecté
if (is_user_logged_in()) {
?>
    <!-- Section unique pour le profil -->
    <div class="profile-container fade-in">
        <!-- Phrase de bienvenue au-dessus -->
        <h1>Bienvenue sur votre profil, <span class="user-name"><?php echo esc_html($author->display_name); ?></span></h1>
        
        <div class="profile-header">
            <!-- Image et données côte à côte -->
            <div class="profile-info">
                <img src="<?php echo get_avatar_url($author->ID); ?>" alt="Profile Picture" class="profile-picture">
            </div>
            <div class="profile-details">
            <span class="user-name2"><?php echo esc_html($author->display_name); ?></span></h1>
                <p class="regdef">Régime : <?php echo isset($user_meta['regime'][0]) ? esc_html($user_meta['regime'][0]) : 'Non défini'; ?></p>
                <p class="biodef">Bio : <?php echo esc_html(get_the_author_meta('description', $author->ID)); ?></p>
                <!-- Citation inspirante -->
            </div>
        </div> <!-- Fin de profile-header -->
    </div> <!-- Fin de profile-container -->




    <div class="section-title fade-in">
        <h2 class="tilteauthor">Favoris</h2>
    </div>
    <p class="profilph1 fade-in">Cette section affiche toutes les recettes que vous avez enregistrées,vous permettant ainsi de retrouver facilement vos plats préférés et de suivre vos choix culinaires.</p>
    <section class="regime-section">
<div class="recipe-cards fade-in">
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
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
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Pâtes aux légumes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">200g de pâtes complètes</p>
                    <p class="ingredients">200g de tomates cerises</p>
                    <p class="ingredients">1 courgette</p>
                    <p class="ingredients">1 oignon</p>
                    <p class="ingredients">1 poivron</p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">2 carottes</p>
                    <p class="ingredients">2 carottes</p>
                    <p class="ingredients">2 cuillères à soupe d'olive</p>
                    <p class="ingredients">10g de basilic</p>
             <p class="prep">Préparation : 35 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Riz frits aux crevettes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">300g de riz cuit</p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">250g de crevettes décortiquées</p>
                    <p class="ingredients">2 oignons verts</p>
                    <p class="ingredients">1 carotte</p>
                    <p class="ingredients">2 cuillères à soupe de sésame</p>
                    <p class="ingredients">1 poivron</p>
                    <p class="ingredients">2 cuillère à soupe de sauce tamarin</p>
                    <p class="ingredients">2 cuillères à café de graines de sésame</p>
                <p class="prep">Préparation : 30 min</p>
            </div>
        </div>
     </div>   
     
    </section>



    <div class="section-title fade-in">
    <h2 class="tilteauthor">Journal</h2>
</div>
<div class="journal-container fade-in">
    <p class="profilph">Le journal nutritionnel vous permet de suivre vos habitudes alimentaires et de consigner vos repas pour mieux gérer votre nutrition et atteindre vos objectifs.</p>
    <textarea id="journal-entry" rows="10" cols="50" placeholder="Écrivez ici..."></textarea>
    <div id="status-message"></div>
</div>
<div class="section-title fade-in">
    <h2 class="tilteauthor">Journal</h2>
</div>
<div class="journal-container fade-in">
    <p class="profilph">Le journal nutritionnel vous permet de suivre vos habitudes alimentaires et de consigner vos repas pour mieux gérer votre nutrition et atteindre vos objectifs.</p>
    <textarea id="journal-entry" rows="10" cols="50" placeholder="Écrivez ici..."></textarea>
    <div id="status-message"></div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    jQuery(document).ready(function($) {
        $('#journal-entry').on('input', function() {
            var entry = $(this).val();
            $.ajax({
                url: ajax_params.ajax_url, // Utilisation de la variable localisée
                type: 'POST',
                data: {
                    action: 'save_journal_entry', // Nom de l'action AJAX
                    nonce: ajax_params.nonce, // Ajout du nonce pour la sécurité
                    entry: entry
                },
                success: function(response) {
                    if (response.success) {
                        $('#status-message').text('Enregistré');
                    } else {
                        $('#status-message').text('Erreur lors de l\'enregistrement');
                    }
                },
                error: function() {
                    $('#status-message').text('Erreur lors de l\'enregistrement');
                }
            });
        });
    });
</script>





<div class="blog-container fade-in">
<div class="section-title fade-in">
        <h2 class="tilteauthor">Articles</h2>

    </div>

<p class="profilph1">Nous avons ajouté de nouveaux articles intéressants pour vous ! Découvrez-les ci-dessous et laissez-vous inspirer par nos dernières recommandations.</p>

<div class="articles-grid fade-in">
<?php
        $articles = [
            
            [
                'link' => 'http://localhost:8888/wellness-site/index.php/article-2/',
                'img_src' => get_template_directory_uri() . '/assets/img/article-2.jpg',
                'alt' => 'La Motivation pour Adopter un Régime',
                'title' => 'La Motivation pour Adopter un Régime : Stratégies et Conseils pour Réussir'
            ],
            [
                'link' => 'http://localhost:8888/wellness-site/index.php/article-4/',
                'img_src' => get_template_directory_uri() . '/assets/img/article-4.jpg',
                'alt' => 'Les 7 Bienfaits de Faire un Régime',
                'title' => 'Les 7 Bienfaits de Faire un Régime : Pourquoi Adopter une Alimentation Contrôlée ?'
            ],
            [
                'link' => 'http://localhost:8888/wellness-site/index.php/article-3/',
                'img_src' => get_template_directory_uri() . '/assets/img/article-3.jpg',
                'alt' => 'Les Bienfaits des Super-Aliments',
                'title' => 'Les Bienfaits des Super-Aliments : Pourquoi Vous Devriez les Inclure dans Votre Régime'
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


<?php
} else {
    // Si l'utilisateur n'est pas connecté, afficher un message
    echo '<p>Veuillez vous connecter pour accéder à votre profil.</p>';
}

get_footer(); // Inclure le pied de page du thème
?>










