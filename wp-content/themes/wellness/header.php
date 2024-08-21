<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <?php wp_head(); ?>

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body <?php body_class(); ?>>
<header class="navbar-custom py-3">
    <div class="container d-flex justify-content-between align-items-center">
        <div class="logo">
            <a href="http://localhost:8888/wellness-site/index.php/accueil/">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logowelleness.png" alt="Wellness Logo" class="img-fluid fade-in" style="width: 120px;">
            </a>
        </div>
        <nav class="fade-in">
            <ul class="nav">
                <li class="nav-item"><a class="nav-link" href="http://localhost:8888/wellness-site/index.php/accueil/">Accueil</a></li>
                <li class="nav-item"><a class="nav-link" href="http://localhost:8888/wellness-site/index.php/blog/">Blog</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link" href="http://localhost:8888/wellness-site/index.php/regimes/">Régimes</a>
                    <ul class="dropdown-menu">
                        <li><a href="http://localhost:8888/wellness-site/index.php/regime-vegan/">Vegan</a></li>
                        <li><a href="http://localhost:8888/wellness-site/index.php/regime-simple/">Simple</a></li>
                        <li><a href="http://localhost:8888/wellness-site/index.php/regime-sans-sucre/">Sans sucre</a></li>
                        <li><a href="http://localhost:8888/wellness-site/index.php/regime-diabetique/">Diabétique</a></li>
                        <li><a href="http://localhost:8888/wellness-site/index.php/regime-perte-de-poids/">Perte de poids</a></li>
                        <li><a href="http://localhost:8888/wellness-site/index.php/regime-mind/">MIND</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="http://localhost:8888/wellness-site/index.php/quizz/">Quizz</a></li>
            </ul>
        </nav>
        <div class="auth-buttons fade-in">
            <?php if (is_user_logged_in()) : ?>
                <?php $current_user = wp_get_current_user(); ?>
                <a href="<?php echo 'http://localhost:8888/wellness-site/index.php/author/' . $current_user->user_login; ?>" class="btn btn-profile">Mon Profil</a>
                <a href="<?php echo wp_logout_url('http://localhost:8888/wellness-site/index.php/accueil/'); ?>" class="btn btn-logout">Se déconnecter</a>
            <?php else : ?>
                <a href="http://localhost:8888/wellness-site/index.php/login/" class="btn btn-login">Se connecter</a>
                <a href="http://localhost:8888/wellness-site/index.php/register/" class="btn btn-register">S'inscrire</a>
            <?php endif; ?>
        </div>
    </div>
</header>
<?php wp_footer(); ?>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne les boutons d'authentification
    var profileButton = document.querySelector('.btn-profile');
    var loginButton = document.querySelector('.btn-login');
    var registerButton = document.querySelector('.btn-register');

    // Vérifie si le corps de la page a la classe 'logged-in'
    if (document.body.classList.contains('logged-in')) {
        // Si l'utilisateur est connecté, affiche le bouton "Mon Profil" et masque les autres
        if (profileButton) profileButton.style.display = 'block';
        if (loginButton) loginButton.style.display = 'none';
        if (registerButton) registerButton.style.display = 'none';
    } else {
        // Si l'utilisateur n'est pas connecté, affiche les boutons "Se connecter" et "S'inscrire" et masque le bouton "Mon Profil"
        if (profileButton) profileButton.style.display = 'none';
        if (loginButton) loginButton.style.display = 'block';
        if (registerButton) registerButton.style.display = 'block';
    }
});
</script>
</body>
</html>


