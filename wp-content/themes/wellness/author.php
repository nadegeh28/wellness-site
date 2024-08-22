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
                <blockquote class="citation">« Ton corps est le reflet de ce que tu manges : nourris-le bien, respecte-le, et 
                il te rendra plus fort chaque jour. »</blockquote>
                <!-- Citation inspirante -->
            </div>
        </div> <!-- Fin de profile-header -->
    </div> <!-- Fin de profile-container -->



    <div class="section-title fade-in">
    <h2 class="tilteauthor">Objectifs</h2>
</div>
<p class="profilph1 fade-in">Pour vous aider à atteindre vos objectifs de santé et de bien-être, Wellness vous offre la possibilité de définir et suivre vos objectifs hebdomadaires.</p>

<?php
if (isset($_POST['update_goals'])) {
    $user_id = get_current_user_id();
    $calorie_goal = sanitize_text_field($_POST['calorie_goal']);
    $protein_goal = sanitize_text_field($_POST['protein_goal']);
    $diet_goal = sanitize_text_field($_POST['diet_goal']);
    $health_goal = sanitize_text_field($_POST['health_goal']);
    $meal_plan_goal = sanitize_text_field($_POST['meal_plan_goal']);

    // Mise à jour des différents objectifs dans la base de données
    update_user_meta($user_id, 'calorie_goal', $calorie_goal);
    update_user_meta($user_id, 'protein_goal', $protein_goal);
    update_user_meta($user_id, 'diet_goal', $diet_goal);
    update_user_meta($user_id, 'health_goal', $health_goal);
    update_user_meta($user_id, 'meal_plan_goal', $meal_plan_goal);

    echo '<p class="success-message fade-in">Objectifs mis à jour avec succès.</p>';
}

// Récupération des objectifs existants
$user_id = get_current_user_id();
$calorie_goal = get_user_meta($user_id, 'calorie_goal', true);
$protein_goal = get_user_meta($user_id, 'protein_goal', true);
$diet_goal = get_user_meta($user_id, 'diet_goal', true);
$health_goal = get_user_meta($user_id, 'health_goal', true);
$meal_plan_goal = get_user_meta($user_id, 'meal_plan_goal', true);
?>

<form method="post" action="" class="fade-in">
    <label for="calorie_goal">But alimentaire :</label>
    <input type="text" id="calorie_goal" name="calorie_goal" value="<?php echo esc_attr($calorie_goal); ?>" required>

    <label for="protein_goal">Objectif nutritionnel :</label>
    <input type="text" id="protein_goal" name="protein_goal" value="<?php echo esc_attr($protein_goal); ?>" required>

    <label for="diet_goal">Cible de régime :</label>
    <input type="text" id="diet_goal" name="diet_goal" value="<?php echo esc_attr($diet_goal); ?>" required>

    <label for="health_goal">Objectif de santé :</label>
    <input type="text" id="health_goal" name="health_goal" value="<?php echo esc_attr($health_goal); ?>" required>

    <label for="meal_plan_goal">Plan de repas :</label>
    <input type="text" id="meal_plan_goal" name="meal_plan_goal" value="<?php echo esc_attr($meal_plan_goal); ?>" required>

    <input type="submit" name="update_goals" value="Mettre à jour">
</form>








<?php
if (isset($_POST['update_feelings'])) {
    $user_id = get_current_user_id();
    $feelings = sanitize_text_field($_POST['feelings']);

    // Mise à jour des ressentis dans la base de données
    update_user_meta($user_id, 'feelings', $feelings);

    $success_message = '<p class="feedback-message fade-in">Journal mis à jour avec succès.</p>';
}

// Récupération des ressentis existants
$user_id = get_current_user_id();
$feelings = get_user_meta($user_id, 'feelings', true);
?>

<div class="blog-container fade-in">
    <div class="section-title fade-in">
        <h2 class="tilteauthor">Journal</h2>
        <p class="profilph1 fade-in">Indiquez comment vous vous sentez aujourd'hui pour suivre votre bien-être général.</p>
    </div>

    <?php if (isset($success_message)) echo $success_message; ?>

    <form method="post" action="" class="feelings-form fade-in">
        <label for="feelings" class="feelings-label">Comment je me sens :</label>
        <textarea id="feelings" name="feelings" rows="4" placeholder="Écrivez ici..." class="feelings-textarea" required><?php echo esc_textarea($feelings); ?></textarea>
        <input type="submit" name="update_feelings" value="Mettre à jour" class="update-button">
    </form>
</div>










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










