<?php

function ajouter_styles_personnalises() {
    wp_enqueue_style(
        'style-personnalise', 
        get_template_directory_uri() . '/assets/css/app.css'
    );
}
add_action('wp_enqueue_scripts', 'ajouter_styles_personnalises');

function enqueue_bootstrap() {
    wp_enqueue_style('bootstrap-css', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
    wp_enqueue_script('bootstrap-js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_bootstrap');

function enqueue_conditions_generales_styles() {
    if (is_page_template('page-conditions-générales.php')) {
        wp_enqueue_style('conditions-generales-styles', get_template_directory_uri() . '/app.css');
    }
}
add_action('wp_enqueue_scripts', 'enqueue_conditions_generales_styles');

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

function theme_enqueue_styles() {
    wp_enqueue_style('style', get_stylesheet_uri());
    wp_enqueue_style('custom-style', get_template_directory_uri() . '/app.css');
    wp_enqueue_script('form-validation', get_template_directory_uri() . '/app.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

function handle_custom_login() {
    // Vérification du nonce
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

?>