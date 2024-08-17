<?php get_header(); ?>

<?php
// Permettre l'accès à ce fichier via AJAX
add_action('wp_ajax_nopriv_process_registration', 'process_registration');
add_action('wp_ajax_process_registration', 'process_registration');

function process_registration() {
    $nom = sanitize_text_field($_POST['nom']);
    $prenom = sanitize_text_field($_POST['prenom']);
    $email = sanitize_email($_POST['email']);
    $motdepasse = $_POST['motdepasse'];
    $motdepasse_confirm = $_POST['motdepasse-confirm'];

    $response = array();

    if ($motdepasse !== $motdepasse_confirm) {
        $response['success'] = false;
        $response['message'] = 'Les mots de passe ne correspondent pas.';
    } else {
        $user_data = array(
            'user_login' => $nom,
            'user_email' => $email,
            'user_pass'  => $motdepasse,
            'first_name' => $prenom
        );

        $user_id = wp_insert_user($user_data);

        if (is_wp_error($user_id)) {
            $response['success'] = false;
            $response['message'] = "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.";
            $response['message'] .= '<br>' . $user_id->get_error_message();
        } else {
            $response['success'] = true;
            $response['message'] = "Inscription réussie. Vous pouvez maintenant accéder à votre compte.";
            $response['redirect'] = 'http://localhost:8888/wellness-site/index.php/quizz/';
        }
    }

    wp_send_json($response);
}
?>

<?php get_header(); ?>

<div class="container-form">
    <!-- Conteneur pour les messages -->
    <div id="message-container"></div>
    
    <form id="inscription-form" method="post" action="<?php echo admin_url('admin-ajax.php'); ?>" class="formulaire-inscription">
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
