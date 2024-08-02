<?php get_header(); ?>



<div class="container">
    <div class="header">
        <h1 class="part1">Explorez et adoptez le régime</h1>
            <h1 class="part2">Qui vous correspond !</h1>
    </div>

    <div class="diet-section vegan-section">
        <div class="diet-content">
            <h2 class="diet-title vegan">Vegan</h2>
            <p class="textreg">Le régime vegan exclut toute consommation de produits d'origine animale. Ce régime ne comportent pas de viande, de poisson, de produits laitiers, d'œufs ou de miel. Les repas contiennent principalement des fruits, légumes, céréales, légumineuses, noix et graines pour obtenir tous les nutriments nécessaires. Ce régime est souvent adopté pour des raisons éthiques, de santé ou environnementales.</p>
            <br>
            <a href="#" class="learnmore">Voir plus ici</a>
        </div>
        <div class="diet-image1">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-14.png" class="imgreg1" alt="Plat Vegan">
        </div>
    </div>

    <br><br><br><br>

    <div class="diet-section reverse">
        <div class="diet-image2">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-13.png" class="imgreg2" alt="Plat Vegan">
        </div>
        <div class="diet-content">
            <h2 class="diet-title diabetic">Diabétique</h2>
            <p class="textreg">Un régime diabétique maintient la glycémie en surveillant les glucides. Il favorise les aliments à faible indice glycémique tels que les fruits, les légumes et les céréales complètes. Il intègre également des protéines maigres, des graisses saines et des fibres, tout en évitant les sucres ajoutés et les aliments transformés.</p>
            <br>
            <a href="#" class="learnmore">Voir plus ici</a>
        </div>
    </div>
</div>








<?php get_footer(); ?>