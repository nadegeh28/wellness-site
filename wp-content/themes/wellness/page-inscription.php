<?php get_header();?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit']) && $_POST['submit'] === 'inscription_form') {
    $nom = sanitize_text_field($_POST['nom']);
    $prenom = sanitize_text_field($_POST['prenom']);
    $email = sanitize_email($_POST['email']);
    $motdepasse = $_POST['motdepasse'];
    $motdepasse_confirm = $_POST['motdepasse-confirm'];

    if ($motdepasse !== $motdepasse_confirm) {
        echo '<div class="mdp">Les mots de passe ne correspondent pas.</div>';
    } else {
        $user_data = array(
            'user_login' => $nom,
            'user_email' => $email,
            'user_pass'  => $motdepasse,
            'first_name' => $prenom
        );

        $user_id = wp_insert_user($user_data);

        if (!is_wp_error($user_id)) {
            $confirmation_message = "Inscription réussie ! Vous pouvez maintenant accéder au quizz.";
            echo '<div class="inscription-success-message">' . esc_html($confirmation_message) . '</div>';
            echo '<a href="http://localhost:8888/wellness-wordpress/quizz1/" class="accederquizz">Accéder au quizz</a>';
        } else {
            echo "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.";
            echo '<div class="erreur"></div>';
        }
    }
}
?>

<div class="container-form">
<form method="post" action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" class="formulaire-inscription">
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

<button type="submit" class="btn-inscription" name="submit" value="inscription_form">Confirmer</button>



<?php get_footer();?>