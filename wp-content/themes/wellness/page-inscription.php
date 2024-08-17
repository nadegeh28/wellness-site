<?php get_header(); ?>

<?php
$error_message = '';
$success_message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit']) && $_POST['submit'] === 'inscription_form') {
    $nom = sanitize_text_field($_POST['nom']);
    $prenom = sanitize_text_field($_POST['prenom']);
    $email = sanitize_email($_POST['email']);
    $motdepasse = $_POST['motdepasse'];
    $motdepasse_confirm = $_POST['motdepasse-confirm'];

    if ($motdepasse !== $motdepasse_confirm) {
        $error_message = 'Les mots de passe ne correspondent pas.';
    } else {
        $user_data = array(
            'user_login' => $nom,
            'user_email' => $email,
            'user_pass'  => $motdepasse,
            'first_name' => $prenom
        );

        $user_id = wp_insert_user($user_data);

        if (is_wp_error($user_id)) {
            $error_message = "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.";
            $error_message .= '<br>' . $user_id->get_error_message();
        } else {
            $success_message = "Inscription réussie. Vous pouvez maintenant accéder à votre compte.";
        }
    }
}
?>

<div class="container-form">
    <?php if (!empty($error_message)) : ?>
        <div class="error-message">
            <?php echo $error_message; ?>
        </div>
    <?php endif; ?>

    <?php if (!empty($success_message)) : ?>
        <div class="success-message">
            <?php echo $success_message; ?>
        </div>
    <?php endif; ?>

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
    </form>
</div>

<button type="button" class="btn-inscription" id="submit-button">Confirmer</button>

<?php get_footer(); ?>
