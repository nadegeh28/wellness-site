<?php get_header();?>

<section class="regime-section">
    <div class="section-title">
        <h2>Diabétique</h2>
    </div>
    <div class="content">
        <div class="text">
            <p>Le régime pour les personnes diabétiques est conçu pour contrôler la glycémie (le sucre dans le sang). Cela implique de faire attention aux glucides, comme le pain, les pâtes et les sucreries, car ils affectent le niveau de sucre dans le sang. Il est recommandé de privilégier les aliments à faible indice glycémique comme les légumes, les fruits frais et les grains entiers.</p>
            <p>Il est important de choisir des aliments sains et nutritifs. Cela signifie favoriser les légumes, les fruits, les protéines maigres comme le poulet ou le poisson, et les bonnes graisses provenant des noix, des avocats ou des huiles végétales.</p>
            <p>Garder un poids santé est également crucial pour contrôler le diabète. Chaque personne est différente, donc il est recommandé de travailler avec un professionnel de la santé pour adapter le régime en fonction des besoins individuels. En suivant ce régime et en surveillant de près la glycémie, on peut aider à prévenir les problèmes de santé liés au diabète.</p>
        </div>
        <div class="image">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-20.png" class="imgregime">
        </div>
    </div>

    <section class="recipes">
        <h2>Recettes</h2>
        <br><br>
        <div class="recipe-cards">
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-11.png" alt="Muesli aux fruits" class="repas">
<h3>Pancakes aux fruits</h3>
<img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                <p class="ingredients">100g de flocons avoines</p>
                    <p class="ingredients">1 banane</p>
                    <p class="ingredients">240ml de lait</p>
                    <p class="ingredients">2 œufs</p>
                    <p class="ingredients">1 sachet de levure</p>
                    <p class="ingredients">1 cuillère de canelle</p>
                    <p class="ingredients">150g de fruits frais ( au choix )</p>
                <p class="prep">Préparation : 20 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Œufs brouillés aux légumes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">4 œufs</p>
                    <p class="ingredients">100g d'épinards frais</p>
                    <p class="ingredients">1 poivron</p>
                    <p class="ingredients">1 tomate</p>
                    <p class="ingredients">1 gousse d'ail</p>
                    <p class="ingredients">1 cuillère à soupe d'huile d'olive</p>

                <p class="prep">Préparation : 20 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Porridge de riz</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">180g de riz complet</p>
                    <p class="ingredients">200ml de lait</p>
                    <p class="ingredients">1 cuillère à café de canelle</p>
                    <p class="ingredients">100g de fruits frais ( au choix )</p>
                    <p class="ingredients">100g de grano</p>
                    <p class="ingredients">30g d'amandes et de graines de chia</p>
                <p class="prep">Préparation : 10 min</p>
            </div>
        </div>
     </div>  
</section> 

    <section class="recipes">
     <div class="recipe-cards">
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Nouilles sautées aux crevettes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">200g de nouilles complètes</p>
                    <p class="ingredients">300g de crevettes décortiquées</p>
                    <p class="ingredients">200g de légumes assortis</p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">1 cuillère à café de gingembre</p>
                    <p class="ingredients">3 cuillères à soupe de sauce tamarin</p>
                    <p class="ingredients">2 cuillères à soupe d'huile de sésames</p>
                    <p class="ingredients">2 oignons verts</p>
                <p class="prep">Préparation : 25 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Salade de fruits de mer</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">300g de mélange de fruits de mer</p>
                    <p class="ingredients">2 tomates</p>
                    <p class="ingredients">1 concombre</p>
                    <p class="ingredients">1 poivron</p>
                    <p class="ingredients">1/2 oignon rouge</p>
                    <p class="ingredients">1 poignée de persil frais</p>
                    <p class="ingredients">2 cuillères de jus de citron</p>
                    <p class="ingredients">2 cuillère à soupe d'huile d'olive</p>
                <p class="prep">Préparation : 20 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Soupe de légumes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">2 carottes</p>
                    <p class="ingredients">1 courgette</p>
                    <p class="ingredients">1 poivron</p>
                    <p class="ingredients">1 oignon</p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">2 branches de celleri</p>
                    <p class="ingredients">2 tomates</p>
                    <p class="ingredients">1L de bouillon de légumes</p>
                <p class="prep">Préparation : 25 min</p>
            </div>
        </div>
     </div>  
</section>

     <section class="recipes">
     <div class="recipe-cards">
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
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Curry de légumes">
                <h3>Pâtes aux légumes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">200g de pâtes complètes</p>
                    <p class="ingredients">200g de tomates cerises</p>
                    <p class="ingredients">1 courgette</p>
                    <p class="ingredients">1 oignon</p>
                    <p class="ingredients">1 poivron</p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">2 carottes</p>
                    <p class="ingredients">2 carottes</p>
                    <p class="ingredients">2 cuillères à soupe d'olive</p>
                    <p class="ingredients">10g de basilic</p>
             <p class="prep">Préparation : 35 min</p>
            </div>
            <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Wrap végétalien">
                <h3>Riz frits aux crevettes</h3>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
                    <p class="ingredients">300g de riz cuit</p>
                    <p class="ingredients">2 gousses d'ail</p>
                    <p class="ingredients">250g de crevettes décortiquées</p>
                    <p class="ingredients">2 oignons verts</p>
                    <p class="ingredients">1 carotte</p>
                    <p class="ingredients">2 cuillères à soupe de sésame</p>
                    <p class="ingredients">1 poivron</p>
                    <p class="ingredients">2 cuillère à soupe de sauce tamarin</p>
                    <p class="ingredients">2 cuillères à café de graines de sésame</p>
                <p class="prep">Préparation : 30 min</p>
            </div>
        </div>
     </div>   
     
    </section>



<?php get_footer();?>