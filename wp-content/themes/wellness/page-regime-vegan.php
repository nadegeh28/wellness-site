<?php get_header();?>

<section class="vegan-section">
    <div class="section-title">
        <h2>Vegan</h2>
    </div>
    <div class="content">
        <div class="text">
            <p>Le régime végan est bien plus qu'une simple alimentation, c'est un mode de vie qui exclut toute exploitation animale. Les végans ne consomment pas de viande, de poisson, de produits laitiers, d'œufs, de miel ou tout autre produit dérivé des animaux. À la place, ils se tournent vers une alimentation exclusivement végétale, privilégiant les fruits, légumes, céréales, légumineuses, noix et graines pour répondre à leurs besoins nutritionnels.</p>
            <p>Cette démarche est souvent motivée par des convictions éthiques profondes envers le respect de tous les êtres vivants, ainsi que par des préoccupations environnementales et de santé. En évitant les produits d'origine animale, les végans cherchent à réduire leur empreinte écologique et à promouvoir un mode de vie plus durable.</p>
            <p>De plus, le mode de vie végan s'étend souvent au-delà de l'alimentation. Les végans évitent les produits testés sur les animaux, choisissent des vêtements et des produits cosmétiques fabriqués sans matières animales et encouragent des pratiques respectueuses de l'environnement dans tous les aspects de leur vie.</p>
        </div>
        <div class="image">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-14.png" class="imgregime" alt="Plat Vegan">
        </div>
    </div>

    <section class="recipes">
        <h2>Recettes</h2>
        <br><br>
        <div class="recipe-cards">
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-11.png" alt="Muesli aux fruits" class="repas">
<h3>Muesli aux fruits</h3>
<img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                <p class="ingredients">100g de flocons avoine</p>
                    <p class="ingredients">50g d’amandes, de noisettes</p>
                    <p class="ingredients">15g de miel</p>
                    <p class="ingredients">Fruits frais (au choix)</p>
                    <p class="ingredients">150g de yaourt frais</p>
                    <p class="ingredients">2 cuillères à soupe de miel</p>
                    <p class="ingredients">1 pincée de canelle</p>
                <p class="prep">Préparation : 10 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Curry de légumes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">400g de légumes assortis</p>
                    <p class="ingredients">1 oignon</p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">1 cuillère à café de gingembre</p>
                    <p class="ingredients">2 tomates</p>
                    <p class="ingredients">400ml de lait de coco</p>
                    <p class="ingredients">3 cuillère de pâtes de curry</p>

                <p class="prep">Préparation : 30 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Wrap végétalien</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">1 grande tortilla de blé complet</p>
                    <p class="ingredients">1/2 avocat mûr</p>
                    <p class="ingredients">1/2 poivron rouge</p>
                    <p class="ingredients">1 carotte rapée</p>
                    <p class="ingredients">1 feuille de salade</p>
                    <p class="ingredients">30g cuillère à soupe de houmous</p>
                    <p class="ingredients">1 cuillère à soupe de jus de citron</p>
                <p class="prep">Préparation : 15 min</p>
            </div>
        </div>
     </div>   

     <div class="recipe-cards">
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-11.png" alt="Muesli aux fruits" class="repas">
<h3>Muesli aux fruits</h3>
<img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                <p class="ingredients">100g de flocons avoine</p>
                    <p class="ingredients">50g d’amandes, de noisettes</p>
                    <p class="ingredients">15g de miel</p>
                    <p class="ingredients">Fruits frais (au choix)</p>
                    <p class="ingredients">150g de yaourt frais</p>
                    <p class="ingredients">2 cuillères à soupe de miel</p>
                    <p class="ingredients">1 pincée de canelle</p>
                <p class="prep">Préparation : 10 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Curry de légumes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">400g de légumes assortis</p>
                    <p class="ingredients">1 oignon</p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">1 cuillère à café de gingembre</p>
                    <p class="ingredients">2 tomates</p>
                    <p class="ingredients">400ml de lait de coco</p>
                    <p class="ingredients">3 cuillère de pâtes de curry</p>

                <p class="prep">Préparation : 30 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Wrap végétalien</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">1 grande tortilla de blé complet</p>
                    <p class="ingredients">1/2 avocat mûr</p>
                    <p class="ingredients">1/2 poivron rouge</p>
                    <p class="ingredients">1 carotte rapée</p>
                    <p class="ingredients">1 feuille de salade</p>
                    <p class="ingredients">30g cuillère à soupe de houmous</p>
                    <p class="ingredients">1 cuillère à soupe de jus de citron</p>
                <p class="prep">Préparation : 15 min</p>
            </div>
        </div>
     </div>  


     <div class="recipe-cards">
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-11.png" alt="Muesli aux fruits" class="repas">
<h3>Muesli aux fruits</h3>
<img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                <p class="ingredients">100g de flocons avoine</p>
                    <p class="ingredients">50g d’amandes, de noisettes</p>
                    <p class="ingredients">15g de miel</p>
                    <p class="ingredients">Fruits frais (au choix)</p>
                    <p class="ingredients">150g de yaourt frais</p>
                    <p class="ingredients">2 cuillères à soupe de miel</p>
                    <p class="ingredients">1 pincée de canelle</p>
                <p class="prep">Préparation : 10 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Curry de légumes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">400g de légumes assortis</p>
                    <p class="ingredients">1 oignon</p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">1 cuillère à café de gingembre</p>
                    <p class="ingredients">2 tomates</p>
                    <p class="ingredients">400ml de lait de coco</p>
                    <p class="ingredients">3 cuillère de pâtes de curry</p>

                <p class="prep">Préparation : 30 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Wrap végétalien</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">1 grande tortilla de blé complet</p>
                    <p class="ingredients">1/2 avocat mûr</p>
                    <p class="ingredients">1/2 poivron rouge</p>
                    <p class="ingredients">1 carotte rapée</p>
                    <p class="ingredients">1 feuille de salade</p>
                    <p class="ingredients">30g cuillère à soupe de houmous</p>
                    <p class="ingredients">1 cuillère à soupe de jus de citron</p>
                <p class="prep">Préparation : 15 min</p>
            </div>
        </div>
     </div>   
     
    </section>

<?php get_footer();?>