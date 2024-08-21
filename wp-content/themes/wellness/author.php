<?php
get_header(); // Inclure l'en-tête du thème

if (is_author()) {
    $author = get_queried_object(); // Récupère les informations de l'auteur actuel
?>
<?php
// Assuming this code is part of your WordPress theme template
$user = wp_get_current_user(); // Get current user info
$user_meta = get_user_meta($user->ID);
?>
<div class="profile-container">
    <div class="profile-header">
        <img src="<?php echo get_avatar_url($user->ID); ?>" alt="Profile Picture" class="profile-picture">
        <h1>Bienvenue sur votre profil, <?php echo esc_html($user->display_name); ?></h1>
        <p>Régime: <?php echo esc_html($user_meta['regime'][0]); ?></p>
        <blockquote>
            "Ton corps est le reflet de ce que tu manges : nourris-le bien, respecte-le, et il te rendra plus fort chaque jour."
        </blockquote>
    </div>

    <h2>Recettes enregistrées</h2>
    <div class="recipes-list">
        <div class="recipe">
            <img src="path_to_image.jpg" alt="Curry de légumes">
            <h3>Curry de légumes</h3>
            <ul>
                <li>400g de légumes assortis</li>
                <li>2 tomates</li>
                <li>1 oignon</li>
                <!-- Add more ingredients -->
            </ul>
        </div>
        <div class="recipe">
            <img src="path_to_image.jpg" alt="Pâtes aux légumes">
            <h3>Pâtes aux légumes</h3>
            <ul>
                <li>200g de pâtes complètes</li>
                <li>200g de tomates cerises</li>
                <!-- Add more ingredients -->
            </ul>
        </div>
        <div class="recipe">
            <img src="path_to_image.jpg" alt="Riz frits aux crevettes">
            <h3>Riz frits aux crevettes</h3>
            <ul>
                <li>300g de riz de cuit</li>
                <li>2 gousses d'ail</li>
                <!-- Add more ingredients -->
            </ul>
        </div>
    </div>
</div>








