<?php
// Assurez-vous que l'utilisateur est connecté
if (is_user_logged_in()) {
?>

<div class="section-title">
    <h2 class="tilteauthor">Recettes enregistrées</h2>
</div>

<section class="regime-section fade-in">
    <div class="recipe-cards fade-in">
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
            <p class="ingredients">3 cuillères de pâte de curry</p>
            <p class="prep">Préparation : 30 min</p>
        </div>

        <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-10.png" alt="Pâtes aux légumes">
            <h3>Pâtes aux légumes</h3>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
            <p class="ingredients">200g de pâtes complètes</p>
            <p class="ingredients">200g de tomates cerises</p>
            <p class="ingredients">1 courgette</p>
            <p class="ingredients">1 oignon</p>
            <p class="ingredients">1 poivron</p>
            <p class="ingredients">2 gousses d'ail</p>
            <p class="ingredients">2 carottes</p>
            <p class="ingredients">2 cuillères à soupe d'huile d'olive</p>
            <p class="ingredients">10g de basilic</p>
            <p class="prep">Préparation : 35 min</p>
        </div>

        <div class="recipe-card">
            <button class="save-button" onclick="saveRecipe(this)"></button>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/image-12.png" alt="Riz frit aux crevettes">
            <h3>Riz frit aux crevettes</h3>
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/stars.png" alt="stars" class="etoiles">
            <p class="ingredients">300g de riz cuit</p>
            <p class="ingredients">2 gousses d'ail</p>
            <p class="ingredients">250g de crevettes décortiquées</p>
            <p class="ingredients">2 oignons verts</p>
            <p class="ingredients">1 carotte</p>
            <p class="ingredients">2 cuillères à soupe de sésame</p>
            <p class="ingredients">1 poivron</p>
            <p class="ingredients">2 cuillères à soupe de sauce tamarin</p>
            <p class="ingredients">2 cuillères à café de graines de sésame</p>
            <p class="prep">Préparation : 30 min</p>
        </div>
    </div>
</section>

<?php
} else {
    // Si l'utilisateur n'est pas connecté, afficher un message
    echo '<p>Veuillez vous connecter pour accéder à votre profil.</p>';
}

get_footer(); // Inclure le pied de page du thème
?>











