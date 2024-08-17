<?php get_header(); ?>

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
            // Inscription réussie, redirection vers la page du quiz
            wp_redirect('http://localhost:8888/wellness-site/index.php/quizz/');
            exit; // Assurez-vous que le script s'arrête après la redirection
        } else {
            echo "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.";
            echo '<div class="erreur"></div>';
        }
    }
}
?>

<div class="container-form">
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
        <!-- Notez que le bouton de soumission n'est pas à l'intérieur du formulaire -->
    </form>
</div>

<button type="button" class="btn-inscription" id="submit-button">Confirmer</button>

<script>
    document.getElementById('submit-button').addEventListener('click', function() {
        document.getElementById('inscription-form').submit();
    });
</script>

<?php get_footer(); ?>




