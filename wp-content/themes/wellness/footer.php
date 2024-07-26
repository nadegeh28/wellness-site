<?php wp_footer(); ?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/app.css">

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wellness Footer</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <footer class="footer mt-auto py-3">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logowelleness.png" alt="Wellness Logo" class="img-fluid" style="width: 120px; border-radius: 100px;">
                </div>
                <div class="col-md-3">
                    <h5>Help</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Condition générales</a></li>
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>Contact</h5>
                    <ul class="list-unstyled">
                        <li>Email: contact@wellness.com</li>
                        <li>Téléphone: +32 2 312 54 76</li>
                        <li>Adresse: 111 Rue de la Poste<br>1030 Bruxelles<br>Belgique</li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>Apps</h5>
                    <a href="#"><img src="path-to-google-play-badge.png" alt="Google Play" class="img-fluid"></a>
                    <a href="#"><img src="path-to-app-store-badge.png" alt="App Store" class="img-fluid"></a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
