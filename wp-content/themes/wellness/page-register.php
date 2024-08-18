<?php
get_header();

// Vérifier si la méthode de la requête est POST et si le formulaire d'inscription est soumis
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit']) && $_POST['submit'] === 'inscription_form') {
    // Assainir les données du formulaire
    $nom = sanitize_text_field($_POST['nom']);
    $prenom = sanitize_text_field($_POST['prenom']);
    $email = sanitize_email($_POST['email']);
    $motdepasse = $_POST['motdepasse'];
    $motdepasse_confirm = $_POST['motdepasse-confirm'];

    $response = array();

    // Vérifier si les mots de passe correspondent
    if ($motdepasse !== $motdepasse_confirm) {
        $response['success'] = false;
        $response['message'] = 'Les mots de passe ne correspondent pas.';

        // Afficher le message d'erreur sur la page au lieu de tenter une redirection
        echo json_encode($response);
        exit;
    } else {
        // Préparer les données de l'utilisateur pour l'inscription
        $user_data = array(
            'user_login' => $nom,
            'user_email' => $email,
            'user_pass'  => $motdepasse,
            'first_name' => $prenom,
            'role'       => 'subscriber'
        );

        // Inscrire l'utilisateur
        $user_id = wp_insert_user($user_data);

        if (is_wp_error($user_id)) {
            $response['success'] = false;
            $response['message'] = "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.";
            $response['message'] .= '<br>' . $user_id->get_error_message();

            // Afficher le message d'erreur sur la page au lieu de tenter une redirection
            echo json_encode($response);
            exit;
        } else {
            // Mettre à jour les métadonnées utilisateur
            update_user_meta($user_id, 'nom_complet', $prenom . ' ' . $nom);

            // Utilisation de Profile Builder
            do_action('wppb_register_user', $user_id);

            // Préparer la réponse pour l'inscription réussie
            $response['success'] = true;
            $response['message'] = "Inscription réussie. Vous pouvez maintenant accéder à votre compte.";

            // Afficher la réponse en JSON avant la redirection
            echo json_encode($response);
            exit;
        }
    }
}
?>

<div class="container-form fade-in">
    <div id="message-container"></div>
    
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

