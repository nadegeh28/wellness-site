<?php get_header();?>

<section class="regime-section fade-in">
    <div class="section-title">
        <h2>Diabétique</h2>
    </div>
    <div class="content fade-in">
        <div class="text">
            <p>Le régime pour les personnes diabétiques est conçu pour contrôler la glycémie (le sucre dans le sang). Cela implique de faire attention aux glucides, comme le pain, les pâtes et les sucreries, car ils affectent le niveau de sucre dans le sang. Il est recommandé de privilégier les aliments à faible indice glycémique comme les légumes, les fruits frais et les grains entiers.</p>
            <p>Il est important de choisir des aliments sains et nutritifs. Cela signifie favoriser les légumes, les fruits, les protéines maigres comme le poulet ou le poisson, et les bonnes graisses provenant des noix, des avocats ou des huiles végétales.</p>
            <p>Garder un poids santé est également crucial pour contrôler le diabète. Chaque personne est différente, donc il est recommandé de travailler avec un professionnel de la santé pour adapter le régime en fonction des besoins individuels. En suivant ce régime et en surveillant de près la glycémie, on peut aider à prévenir les problèmes de santé liés au diabète.</p>
        </div>
        <div class="image">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-20.png" class="imgregime">
        </div>
    </div>
</section> 

<section class="recipes fade-in">
    <h2>Recettes</h2>
    <br><br>
    <div class="recipe-cards fade-in">
        <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-11.png" alt="Muesli aux fruits" class="repas">
            <h3>Omelette aux légumes</h3>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
            <p class="ingredients">3 œufs</p>
            <p class="ingredients">100g de champignons</p>
            <p class="ingredients">100g de courgettes</p>
            <p class="ingredients">100g de brocolis</p>
            <p class="ingredients">1 carotte</p>
            <p class="ingredients">50g de tomates cerise</p>
            <p class="ingredients">1 aubergine</p>
            <p class="ingredients">10g de persil</p>
            <p class="prep">Préparation : 20 min</p>
        </div>
        <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
            <h3>Pancakes à la farine d'amande</h3>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
            <p class="ingredients">100g de farine d'amande</p>
            <p class="ingredients">2 œufs</p>
            <p class="ingredients">120ml de lait</p>
            <p class="ingredients">1 sachet de levure</p>
            <p class="ingredients">1 pincée de sel</p>
            <p class="ingredients">100g de fruits frais (aux choix)</p>
            <p class="prep">Préparation : 20 min</p>
        </div>
        <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
            <h3>Œufs pochés sur épinards sautées</h3>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
            <p class="ingredients">2 œufs</p>
            <p class="ingredients">200g d'épinards frais</p>
            <p class="ingredients">1 gousse d'ail</p>
            <p class="ingredients">1 cuillère à soupe d'olive</p>
            <p class="ingredients">Quelques gouttes de jus de citron</p>
            <p class="prep">Préparation : 25 min</p>
        </div>
    </div>
</section> 

<section class="recipes fade-in">
    <div class="recipe-cards fade-in">
        <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
            <h3>Quiche aux légumes avec salade</h3>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
            <p class="ingredients">150g de farine d'amande</p>
            <p class="ingredients">60g de beurre fondu</p>
            <p class="ingredients">4 œufs</p>
            <p class="ingredients">200ml de lait d'amande non sucré</p>
            <p class="ingredients">100g d'épinards frais</p>
            <p class="ingredients">1 poivron</p>
            <p class="ingredients">1 courgette</p>
            <p class="ingredients">100g de salade verte</p>
            <p class="ingredients">1 tomate</p>
            <p class="prep">Préparation : 20 min</p>
        </div>
        <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
            <h3>Soupe d'haricots et légumes</h3>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
            <p class="ingredients">200g d'haricots blancs</p>
            <p class="ingredients">2 carottes</p>
            <p class="ingredients">1 courgette</p>
            <p class="ingredients">1 poivron</p>
            <p class="ingredients">2 gousses d'ail</p>
            <p class="ingredients">1L de bouillon de légumes</p>
            <p class="ingredients">100g de farine</p>
            <p class="ingredients">2 cuillères à soupe d'huile d'olive</p>
            <p class="prep">Préparation : 25 min</p>
        </div>
        <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
            <h3>Tofu sauté avec légumes</h3>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
            <p class="ingredients">300g de tofu ferme</p>
            <p class="ingredients">200g de brocoli</p>
            <p class="ingredients">1 poivron</p>
            <p class="ingredients">2 carottes</p>
            <p class="ingredients">2 gousses d'ail</p>
            <p class="ingredients">1 courgette</p>
            <p class="ingredients">1 oignon</p>
            <p class="ingredients">2 cuillères à soupe de sauce tamari</p>
            <p class="ingredients">1 cuillère à café de gingembre frais</p>
            <p class="prep">Préparation : 30 min</p>
        </div>
    </div>
</section> 

<section class="recipes fade-in">
    <div class="recipe-cards fade-in">
        <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
            <h3>Curry de légumes avec du riz basmati</h3>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
            <p class="ingredients">400g de légumes variés (au choix)</p>
            <p class="ingredients">1 oignon</p>
            <p class="ingredients">2 gousses d'ail</p>
            <p class="ingredients">5g de gingembre râpé</p>
            <p class="ingredients">2 tomates</p>
            <p class="ingredients">200ml de lait de coco léger</p>
            <p class="ingredients">1 cuillère de pâte de curry</p>
            <p class="ingredients">2 cuillères à soupe d'huile d'olive</p>
            <p class="ingredients">150g de riz basmati</p>
            <p class="prep">Préparation : 35 min</p>
        </div>
        <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
            <h3>Poulet grillé avec salade d'épinards</h3>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
            <p class="ingredients">2 blancs de poulet</p>
            <p class="ingredients">1 cuillère à soupe d'huile d'olive</p>
            <p class="ingredients">1 gousse d'ail</p>
            <p class="ingredients">1 cuillère à soupe de jus de citron</p>
            <p class="ingredients">200g d'épinards frais</p>
            <p class="ingredients">1 tomate</p>
            <p class="ingredients">1/2 concombre</p>
            <p class="ingredients">1/4 d'oignon rouge</p>
            <p class="prep">Préparation : 30 min</p>
        </div>
        <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
            <h3>Bœuf sauté aux légumes</h3>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
            <p class="ingredients">300g de bœuf maigre</p>
            <p class="ingredients">200g de brocoli</p>
            <p class="ingredients">1 poivron</p>
            <p class="ingredients">1 courgette</p>
            <p class="ingredients">2 gousses d'ail</p>
            <p class="ingredients">100g de champignons</p>
            <p class="ingredients">1 oignon rouge</p>
            <p class="ingredients">2 cuillères à soupe d'huile de sésame</p>
            <p class="ingredients">2 cuillères à soupe de sauce tamari</p>
            <p class="prep">Préparation : 30 min</p>
        </div>
    </div>
</section>

<?php get_footer();?>
