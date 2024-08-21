<?php
get_header(); // Inclure l'en-tête du thème

// Récupérer les informations de l'auteur ou de l'utilisateur connecté
$author = is_author() ? get_queried_object() : wp_get_current_user();
$user_meta = get_user_meta($author->ID);

// Vérifier si l'utilisateur est connecté
if (is_user_logged_in()) {
?>
    <!-- Section unique pour le profil -->
    <div class="profile-container">
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

<?php
} else {
    // Si l'utilisateur n'est pas connecté, afficher un message
    echo '<p>Veuillez vous connecter pour accéder à votre profil.</p>';
}

get_footer(); // Inclure le pied de page du thème
?>










