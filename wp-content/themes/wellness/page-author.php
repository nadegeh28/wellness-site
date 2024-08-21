<?php
get_header(); // Inclure l'en-tête du thème

if (is_author()) {
    $author = get_queried_object(); // Récupère les informations de l'auteur actuel
?>
    <div class="author-profile">
        <h1>Profil de <?php echo esc_html($author->display_name); ?></h1>
        <p>Email : <?php echo esc_html($author->user_email); ?></p>
        <p>Bio : <?php echo esc_html(get_the_author_meta('description', $author->ID)); ?></p>
        <!-- Ajoutez plus de contenu et de structure ici -->
    </div>
<?php
}

get_footer(); // Inclure le pied de page du thème
?>



