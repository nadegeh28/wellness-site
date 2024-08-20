<?php

// Enqueue les styles personnalisés
function ajouter_styles_personnalises() {
    wp_enqueue_style(
        'style-personnalise', 
        get_template_directory_uri() . '/assets/css/app.css'
    );
}
add_action('wp_enqueue_scripts', 'ajouter_styles_personnalises');

// Enqueue Bootstrap CSS et JS
function enqueue_bootstrap() {
    wp_enqueue_style('bootstrap-css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
    wp_enqueue_script('bootstrap-js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_bootstrap');

// Enqueue les styles pour les conditions générales
function enqueue_conditions_generales_styles() {
    if (is_page_template('page-conditions-générales.php')) {
        wp_enqueue_style('conditions-generales-styles', get_template_directory_uri() . '/app.css');
    }
}
add_action('wp_enqueue_scripts', 'enqueue_conditions_generales_styles');

// Enqueue le script personnalisé
function my_custom_scripts() {
    wp_enqueue_script(
        'custom-script', 
        get_template_directory_uri() . '/assets/js/app.js', 
        array(), 
        null, 
        true 
    );
}
add_action('wp_enqueue_scripts', 'my_custom_scripts');

// Enqueue les styles et scripts principaux du thème
function theme_enqueue_styles() {
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_style('custom-style', get_template_directory_uri() . '/app.css');
    wp_enqueue_script('form-validation', get_template_directory_uri() . '/app.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

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
        wp_redirect('http://localhost:8888/wellness-site/index.php/edit-profile/');
    }
    exit;
}
add_action('admin_post_nopriv_custom_login', 'handle_custom_login');
add_action('admin_post_custom_login', 'handle_custom_login');

// Gestion de l'inscription personnalisée
function handle_custom_registration() {
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit']) && $_POST['submit'] === 'inscription_form') {
        $nom = sanitize_text_field($_POST['nom']);
        $prenom = sanitize_text_field($_POST['prenom']);
        $email = sanitize_email($_POST['email']);
        $motdepasse = $_POST['motdepasse'];
        $motdepasse_confirm = $_POST['motdepasse-confirm'];

        if ($motdepasse !== $motdepasse_confirm) {
            wp_redirect('http://localhost:8888/wellness-site/index.php/register/?error=password_mismatch');
            exit;
        } else {
            $user_data = array(
                'user_login' => $nom,
                'user_email' => $email,
                'user_pass'  => $motdepasse,
                'first_name' => $prenom,
                'role'       => 'subscriber'
            );

            $user_id = wp_insert_user($user_data);

            if (is_wp_error($user_id)) {
                wp_redirect('http://localhost:8888/wellness-site/index.php/register/?error=registration_failed');
                exit;
            } else {
                wp_redirect('http://localhost:8888/wellness-site/index.php/edit-profile/?success=registration_success');
                exit;
            }
        }
    }
}
add_action('init', 'handle_custom_registration');

// Enqueue les scripts personnalisés pour le quiz et les résultats
function enqueue_custom_quiz_scripts() {
    if (is_page_template('page-quizz-3.php')) {
        wp_enqueue_script('quiz-js', get_template_directory_uri() . '/js/app.js', array(), null, true);
    }

    if (is_page_template('page-resultats.php')) {
        wp_enqueue_script('resultats-js', get_template_directory_uri() . '/js/app.js', array(), null, true);
    }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_quiz_scripts');

// Enregistre les modèles de page personnalisés
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




function my_enqueue_scripts() {
    wp_enqueue_script('my-custom-script', get_template_directory_uri() . '/js/app.js', array('jquery'), null, true);

    // Passer les variables PHP au JavaScript
    wp_localize_script('my-custom-script', 'wpApiSettings', array(
        'root'  => esc_url(rest_url()),
        'nonce' => wp_create_nonce('wp_rest'),
        'post_id' => get_the_ID(), // Passer l'ID du post
    ));
}
add_action('wp_enqueue_scripts', 'my_enqueue_scripts');


?>



