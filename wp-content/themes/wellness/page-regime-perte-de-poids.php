<?php get_header();?>

<section class="regime-section fade-in">
    <div class="section-title">
        <h2>Perte de poids</h2>
    </div>
    <div class="content fade-in">
        <div class="text">
            <p>Un régime pour perdre du poids implique généralement une réduction contrôlée de l’apport calorique et une attention particulière aux choix alimentaires. L’objectif principal est de créer un déficit calorique, où l’on brûle plus de calories que l’on n’en consomme, ce qui incite le corps à utiliser les réserves de graisse pour l’énergie.</p>
            <p>On se concentre souvent sur la consommation d’aliments sains et riches en nutriments, comme les fruits, les légumes, les protéines maigres et les glucides complexes, tout en limitant les aliments transformés riches en sucres ajoutés, en gras saturés et en calories vides.</p>
            <p>Le contrôle des portions est également important. Il s’agit de manger des quantités appropriées pour éviter les excès caloriques, même avec des aliments sains. L’hydratation joue également un rôle crucial, car boire suffisamment d’eau peut aider à contrôler l’appétit et à maintenir un métabolisme sain.</p>
        </div>
        <div class="image">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-16.png" class="imgregime" alt="Plat Vegan">
        </div>
    </div>

    
    <section class="recipes fade-in">
        <h2>Recettes</h2>
        <br><br>
        <div class="recipe-cards fade-in">
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-11.png" alt="Muesli aux fruits" class="repas">
<h3>Pancakes à la farine d'avoine</h3>
<img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                <p class="ingredients">150g de farine d'avoine</p>
                    <p class="ingredients">2 œufs</p>
                    <p class="ingredients">150ml de lait d'avoine</p>
                    <p class="ingredients">1 sachet de levure</p>
                    <p class="ingredients">1 pincée de sel</p>
                    <p class="ingredients">100g de fruits frais</p>
                <p class="prep">Préparation : 25 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Bagel à l'avocat et au saumon fumé</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">1 bagel complet</p>
                    <p class="ingredients">1/2 avocat</p>
                    <p class="ingredients">100g de saumon fumé</p>
                    <p class="ingredients">50g de fromage ( au choix ) </p>
                    <p class="ingredients">Quelques gouttes de jus de citron</p>

                <p class="prep">Préparation : 20 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Bowl de fruits avec de la menthe fraiche</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">100g de fraises</p>
                    <p class="ingredients">100g de myrtilles</p>
                    <p class="ingredients">1 kiwi</p>
                    <p class="ingredients">Quelques feuilles de menthe</p>
                    <p class="ingredients">1 cuillère à soupe de graine de chia</p>
                    <p class="ingredients">100g de yaourt nature</p>
                <p class="prep">Préparation : 10 min</p>
            </div>
        </div>
     </div>  
</section> 

<section class="regime-section fade-in">
    <div class="recipe-cards fade-in">
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Sandwich à la dinde avec de la salade</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">2 tranches de pain complet</p>
                    <p class="ingredients">100g de tranches de dindes</p>
                    <p class="ingredients">Quelques de feuilles de laitue</p>
                    <p class="ingredients">1 tomate</p>
                    <p class="ingredients">1/2 concombre</p>
                    <p class="ingredients">1/2 avocat</p>
                    <p class="ingredients">1 cuillère à café de moutarde</p>
                <p class="prep">Préparation : 15 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Omelette aux légumes et au fromage</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">3 œufs</p>
                    <p class="ingredients">30g de mozzarella</p>
                    <p class="ingredients">1 cuillère à café d'huile d'olive</p>
                    <p class="ingredients">10g de persil</p>
                    <p class="ingredients">50g d'épinard</p>
                    <p class="ingredients">1 tomate</p>
                    <p class="ingredients">1/2 poivron</p>
                    <p class="ingredients">1/4 oignon</p>
                <p class="prep">Préparation : 20 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Salade de poulet</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">150g de blanc de poulet</p>
                    <p class="ingredients">100g de laitue romaine</p>
                    <p class="ingredients">150g de tomates</p>
                    <p class="ingredients">1/2 concombre</p>
                    <p class="ingredients">50g d'olive noire</p>
                    <p class="ingredients">2 branches de celleri</p>
                    <p class="ingredients">30g de feta allégée</p>
                    <p class="ingredients">1/4 oignon rouge</p>
                    <p class="ingredients">1 cuillère à soupe d'huile d'olive</p>
                    <p class="ingredients">1 cuillère à soupe de jus de citron</p>

                <p class="prep">Préparation : 25 min</p>
            </div>
        </div>
     </div>  
</section>

<section class="regime-section fade-in">
     <div class="recipe-cards fade-in">
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Nouilles de courgettes sautées au poulet</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">250g de courgettes spiralés en nouilles</p>
                    <p class="ingredients">200g de blanc de poulet</p>
                    <p class="ingredients">1 cuillère à soupe d'huile d'olive</p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">1 poivron</p>
                    <p class="ingredients">1/2 oignon</p>
                    <p class="ingredients">2 cuillères à soupe de sauce soja</p>
                    <p class="ingredients">1 cuillère à café de gingembre</p>
                    <p class="ingredients">1 cuillère à café de gingembre</p>

                <p class="prep">Préparation : 25 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Soupe mis avec tofu et algues</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">3 cuillère à soupe de pâte miso</p>
                    <p class="ingredients">150g de tofu ferme </p>
                    <p class="ingredients">10g d'algue wakame</p>
                    <p class="ingredients">2 oignons verts</p>
                    <p class="ingredients">100g de champignons</p>
                    <p class="ingredients">1 carotte</p>
                    <p class="ingredients">1 cuillère à café de gingembre</p>
                    <p class="ingredients">2 œufs dures</p>
             <p class="prep">Préparation : 35 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Poulet rôti avec salade</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">300g de blanc de poulet</p>
                    <p class="ingredients">2 cuillère d'huile </p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">1 poivron</p>
                    <p class="ingredients">1 cuillère de vinaigrette lègére</p>
                    <p class="ingredients">100g de laitue romaine</p>
                    <p class="ingredients">150g de tomates cerises</p>
                    <p class="ingredients">1 poivron</p>
                    <p class="ingredients">1/4 oignon rouge</p>
                <p class="prep">Préparation : 30 min</p>
            </div>
        </div>
     </div>   
     
    </section>



<?php get_footer();?>