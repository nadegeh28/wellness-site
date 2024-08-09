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


add_action('wp_footer', 'debug_post_data');


