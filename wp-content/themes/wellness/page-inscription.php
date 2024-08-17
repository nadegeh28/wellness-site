<?php get_header(); ?>

<?php
// Si le formulaire est soumis via AJAX
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit']) && $_POST['submit'] === 'inscription_form') {
    $nom = sanitize_text_field($_POST['nom']);
    $prenom = sanitize_text_field($_POST['prenom']);
    $email = sanitize_email($_POST['email']);
    $motdepasse = $_POST['motdepasse'];
    $motdepasse_confirm = $_POST['motdepasse-confirm'];

    // Tableau pour la réponse
    $response = array();

    // Vérifiez si les mots de passe correspondent
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

        // Vérifiez s'il y a une erreur lors de la création de l'utilisateur
        if (is_wp_error($user_id)) {
            $response['success'] = false;
            $response['message'] = "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.";
            $response['message'] .= '<br>' . $user_id->get_error_message(); // Ajoutez le message d'erreur spécifique
        } else {
            $response['success'] = true;
            $response['message'] = "Inscription réussie. Vous pouvez maintenant accéder à votre compte.";
        }
    }

    // Répondre avec des données JSON
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?>

<div class="container-form">
    <div id="message-container" style="display:none;"></div> 
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
