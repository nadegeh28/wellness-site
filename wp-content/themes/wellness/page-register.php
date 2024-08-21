
<?php
get_header();
?>

<div class="container-form fade-in">
    <div id="message-container">
        <?php
        // Affichage des messages basés sur les paramètres d'URL
        if (isset($_GET['error'])) {
            $error_code = sanitize_text_field($_GET['error']);
            $error_message = '';

            switch ($error_code) {
                case 'password_mismatch':
                    $error_message = 'Les mots de passe ne correspondent pas. Veuillez réessayer.';
                    break;
                case 'registration_failed':
                    $error_message = 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.';
                    break;
                default:
                    $error_message = 'Une erreur inconnue est survenue. Veuillez réessayer.';
                    break;
            }

            echo '<div class="error-message">' . esc_html($error_message) . '</div>';
        } elseif (isset($_GET['success']) && $_GET['success'] === 'registration_success') {
            echo '<div class="success-message">Inscription réussie ! Vous pouvez maintenant accéder à votre compte.</div>';
        }
        ?>
    </div>

    <form id="inscription-form" method="post" action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" class="formulaire-inscription">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logowelleness.png" alt="Wellness Logo" class="logo-inscr">
        <div class="form-group">
            <input type="text" id="nom" name="nom" required class="form-input" placeholder="Nom">
        </div>
        <div class="form-group">
            <input type="text" id="prenom" name="prenom" required class="form-input" placeholder="Prénom">
        </div>
        <div class="form-group">
            <input type="email" id="email" name="email" required class="form-input" placeholder="Adresse E-mail">
        </div>
        <div class="form-group">
            <input type="password" id="motdepasse" name="motdepasse" required class="form-input" placeholder="Mot de passe">
        </div>
        <div class="form-group">
            <input type="password" id="motdepasse-confirm" name="motdepasse-confirm" required class="form-input" placeholder="Confirmation du mot de passe">
        </div>
        <input type="hidden" name="submit" value="inscription_form">
        <button type="submit" class="btn-inscription fade-in" id="submit-button">Confirmer</button>
    </form>
</div>

<?php get_footer(); ?>
