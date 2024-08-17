<?php

function ajouter_styles_personnalises() {
  wp_enqueue_style(
    'style-personnalise', 
    get_template_directory_uri() . '/assets/css/app.css');
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


function debug_post_data() {
  if (isset($_POST) && !empty($_POST)) {
      echo '<pre>';
      print_r($_POST);
      echo '</pre>';
  }
}


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

function my_theme_enqueue_scripts() {
  wp_enqueue_script('app-script', get_template_directory_uri() . '/js/app.js', array(), null, true);
  wp_enqueue_style('theme-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_scripts');

function enqueue_custom_script() {
  wp_enqueue_script('custom-script', get_template_directory_uri() . '/js/app.js', array('jquery'), null, true);

  // Localiser le script avec le nonce pour l'API REST
  wp_localize_script('custom-script', 'wpApiSettings', array(
      'nonce' => wp_create_nonce('wp_rest')
  ));
}
add_action('wp_enqueue_scripts', 'enqueue_custom_script');


function theme_enqueue_styles() {
  wp_enqueue_style('style', get_stylesheet_uri());
  wp_enqueue_style('custom-style', get_template_directory_uri() . '/app.css');
  wp_enqueue_script('form-validation', get_template_directory_uri() . '/app.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');






