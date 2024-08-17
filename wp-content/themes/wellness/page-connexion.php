<?php get_header();?>




<img src="<?php echo get_template_directory_uri(); ?>/assets/img/logowelleness.png" alt="Wellness Logo" class="logo-inscr">
<form action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" method="post" class="login-form">   
<input type="hidden" name="action" value="custom_login">
    
    <input type="email" name="user_email" id="email" placeholder="votre adresse e-mail" required class="email">
    
    <input type="password" name="user_password" id="password" placeholder="votre mot de passe" required class="password">
    
    <?php wp_nonce_field( 'custom_login_nonce', 'custom_login_nonce_field' ); ?>
    
    <input type="submit" value="Se connecter" class="login-button">
</form>


<?php get_footer();?>