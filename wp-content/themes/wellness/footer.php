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
    <footer class="footer mt-auto py-3 fade-in">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/logowelleness.png" alt="Wellness Logo" class="img-fluid" style="width: 120px; border-radius: 100px;">
                </div>
                <div class="col-md-3">
                    <h5>Help</h5>
                    <ul class="list-unstyled">
                        <li><a href="http://localhost:8888/wellness-site/index.php/conditions-generales/">Condition générales</a></li>
                        <li><a href="http://localhost:8888/wellness-site/index.php/mentions-legales/">Mentions légales</a></li>
                        <li><a href="#">Forum</a></li>
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
                <div class="col-md-2">
                    <h5>Apps</h5>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/gooogleplay1.png" alt="Google play" class="img-fluid" style="width: 150px;">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/appstore1.png" alt="App store" class="img-fluid" style="width: 150px;">
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
