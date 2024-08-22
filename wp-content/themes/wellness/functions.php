<?php

// Enqueue les styles et scripts principaux du thème
function theme_enqueue_styles_and_scripts() {
    // Enqueue les styles
    wp_enqueue_style('style-personnalise', get_template_directory_uri() . '/assets/css/app.css');
    wp_enqueue_style('bootstrap-css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');

    // Enqueue les scripts
    wp_enqueue_script('bootstrap-js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', array('jquery'), null, true);
    wp_enqueue_script('my-custom-script', get_template_directory_uri() . '/assets/js/app.js', array('jquery'), null, true);

    // Passer les variables PHP au JavaScript
    wp_localize_script('my-custom-script', 'ajax_params', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('ajax_nonce'),
        'user_id'  => get_current_user_id()
    ));
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles_and_scripts');

// Enregistrez les modèles de page personnalisés
function register_custom_page_templates() {
    if (locate_template('page-quizz-3.php') && locate_template('page-resultats.php')) {
        add_filter('theme_page_templates', function($templates) {
            $templates['page-quizz-3.php'] = 'Page de Quiz';
            $templates['page-resultats.php'] = 'Page des Résultats';
            return $templates;
        });
    }
}
add_action('init', 'register_custom_page_templates');

// Gestion de la connexion personnalisée
function handle_custom_login() {
    if (!isset($_POST['custom_login_nonce_field']) || !wp_verify_nonce($_POST['custom_login_nonce_field'], 'custom_login_nonce')) {
        wp_redirect(home_url());
        exit;
    }

    $creds = array(
        'user_login'    => $_POST['user_email'],
        'user_password' => $_POST['user_password'],
        'remember'      => true,
    );

    $user = wp_signon($creds, false);

    if (is_wp_error($user)) {
        wp_redirect(home_url('/login?login=failed'));
    } else {
        $username = $user->user_login;
        wp_redirect(home_url('/author/' . $username));
    }
    exit;
}
add_action('admin_post_nopriv_custom_login', 'handle_custom_login');
add_action('admin_post_custom_login', 'handle_custom_login');

// Gestion de l'inscription personnalisée
function handle_custom_registration() {
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit']) && $_POST['submit'] === 'inscription_form') {
        // Récupération et assainissement des champs
        $nom = sanitize_text_field($_POST['nom']);
        $prenom = sanitize_text_field($_POST['prenom']);
        $email = sanitize_email($_POST['email']);
        $motdepasse = $_POST['motdepasse'];
        $motdepasse_confirm = $_POST['motdepasse-confirm'];

        // Vérification des mots de passe
        if ($motdepasse !== $motdepasse_confirm) {
            wp_redirect(home_url('/register/?error=password_mismatch'));
            exit;
        } else {
            // Création d'un nom d'utilisateur propre basé sur le prénom et nom
            $username = sanitize_user($prenom . $nom);
            $username = strtolower(str_replace(' ', '', $username)); // Enlever les espaces et mettre en minuscule

            // S'assurer que le nom d'utilisateur est unique
            if (username_exists($username)) {
                $username .= rand(1000, 9999); // Ajouter un nombre aléatoire si le nom existe déjà
            }

            // Création de l'utilisateur
            $user_data = array(
                'user_login' => $username,
                'user_email' => $email,
                'user_pass'  => $motdepasse,
                'first_name' => $prenom,
                'last_name'  => $nom,
                'role'       => 'subscriber'
            );

            $user_id = wp_insert_user($user_data);

            // Gestion des erreurs
            if (is_wp_error($user_id)) {
                wp_redirect(home_url('/register/?error=registration_failed'));
                exit;
            } else {
                // Connexion automatique après inscription
                wp_set_auth_cookie($user_id);

                // Redirection vers la page profil de l'utilisateur après inscription
                wp_redirect(home_url('/author/' . $username));
                exit;
            }
        }
    }
}
add_action('init', 'handle_custom_registration');

// Gestion de la sauvegarde des recettes via AJAX
function save_recipe_function() {
    check_ajax_referer('ajax_nonce', 'nonce'); // Vérifier le nonce

    $user_id = intval($_POST['user_id']);
    $recipe_id = intval($_POST['recipe_id']);

    if (!is_user_logged_in()) {
        wp_send_json_error(array('message' => 'Utilisateur non connecté.'));
        return;
    }

    $saved_recipes = get_user_meta($user_id, 'saved_recipes', true);
    $saved_recipes = $saved_recipes ? explode(',', $saved_recipes) : array();

    if (!in_array($recipe_id, $saved_recipes)) {
        $saved_recipes[] = $recipe_id;
        update_user_meta($user_id, 'saved_recipes', implode(',', $saved_recipes));
        wp_send_json_success();
    } else {
        wp_send_json_error(array('message' => 'Recette déjà enregistrée.'));
    }
}
add_action('wp_ajax_save_recipe', 'save_recipe_function');
add_action('wp_ajax_nopriv_save_recipe', 'save_recipe_function'); // Pour les utilisateurs non connectés, si nécessaire





function my_enqueue_scripts() {
    wp_enqueue_script('my-custom-script', get_template_directory_uri() . '/js/app.js', array('jquery'), null, true);

    // Passer les variables PHP au JavaScript
    wp_localize_script('my-custom-script', 'ajax_params', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('ajax_nonce'),
        'user_id'  => get_current_user_id() // Ajouter l'ID utilisateur
    ));
}
add_action('wp_enqueue_scripts', 'my_enqueue_scripts');

?>




