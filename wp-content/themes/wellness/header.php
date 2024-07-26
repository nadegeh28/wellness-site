<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <?php wp_head(); ?>

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
 
    <style>

    </style>
</head>
<body <?php body_class(); ?>>
<header class="navbar-custom py-3">
    <div class="container d-flex justify-content-between align-items-center">
        <div class="logo">
            <a href="<?php echo home_url(); ?>">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logowelleness.png" alt="Wellness Logo" class="img-fluid" style="width: 150px;">
            </a>
        </div>
        <nav>
            <ul class="nav">
                <li class="nav-item"><a class="nav-link" href="<?php echo home_url(); ?>">Accueil</a></li>
                <li class="nav-item"><a class="nav-link" href="<?php echo home_url('/forum'); ?>">Forum</a></li>
                <li class="nav-item"><a class="nav-link" href="<?php echo home_url('/regimes'); ?>">Régimes</a></li>
                <li class="nav-item"><a class="nav-link" href="<?php echo home_url('/quizz'); ?>">Quizz</a></li>
            </ul>
        </nav>
        <div class="auth-buttons">
    <a href="<?php echo wp_login_url(); ?>" class="btn btn-login">Se connecter</a>
    <a href="<?php echo wp_registration_url(); ?>" class="btn btn-register">S'inscrire</a>


    </div>
</header>
<?php wp_footer(); ?>
<!-- Bootstrap JS and dependencies -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
