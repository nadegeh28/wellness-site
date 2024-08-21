<?php
// Inclure WordPress pour utiliser $wpdb
require_once('../../../../wp-load.php'); // Ajustez le chemin selon votre structure

if (!is_user_logged_in()) {
    wp_send_json_error('Utilisateur non authentifié.');
    exit;
}

global $wpdb;

$table_name = $wpdb->prefix . 'journal'; // Nom de la table
$user_id = get_current_user_id(); // Obtenir l'ID de l'utilisateur connecté
$entry = sanitize_textarea_field($_POST['entry']); // Nettoyer les données

if ($user_id && $entry) {
    $wpdb->insert(
        $table_name,
        array(
            'user_id' => $user_id,
            'entry' => $entry
        ),
        array(
            '%d',
            '%s'
        )
    );
    wp_send_json_success('Données sauvegardées.');
} else {
    wp_send_json_error('Erreur : données manquantes.');
}
?>
