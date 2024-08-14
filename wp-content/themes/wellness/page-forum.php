<?php get_header();?>

<div class="forum-container">
    <h3 class="part1">N'hésitez pas à poser vos questions </h3> 
    <h3 class="part2">ou à partager vos connaissances avec les autres.</h3>
    <br>

    <div class="forum-comments">
        <!-- Commentaire 1 -->
        <div class="comment-item">
            <div class="comment-author-avatar">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user1.png" alt="Alicia Carmen">
            </div>
            <div class="comment-content">
                <h3 class="comment-author-name">Alicia Carmen</h3>
                <p class="comment-text">Wellness est parfaite pour les débutants, maintenant je sais quel régime suivre ! Mercii Wellness</p>
            </div>
        </div>

        <!-- Commentaire 2 -->
        <div class="comment-item">
            <div class="comment-author-avatar">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user2.png" alt="Lorie Samba">
            </div>
            <div class="comment-content">
                <h3 class="comment-author-name">Lorie Samba</h3>
                <p class="comment-text">Grâce à Wellness, j’ai pu préparer des petits plats adaptés à mon diabète.</p>
            </div>
        </div>

        <!-- Commentaire 3 -->
        <div class="comment-item">
            <div class="comment-author-avatar">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user3.png" alt="Mathy Eka">
            </div>
            <div class="comment-content">
                <h3 class="comment-author-name">Mathy Eka</h3>
                <p class="comment-text">Le fait que les plats choisis par Wellness prennent en compte nos carences durant nos périodes est super cool!</p>
            </div>
        </div>

        <!-- Commentaire 4 -->
        <div class="comment-item">
            <div class="comment-author-avatar">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user4.png" alt="Maeva Martinez">
            </div>
            <div class="comment-content">
                <h3 class="comment-author-name">Maeva Martinez</h3>
                <p class="comment-text">Le site est simple à comprendre j’adore!</p>
            </div>
        </div>

        <!-- Commentaire 5 -->
        <div class="comment-item">
            <div class="comment-author-avatar">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user5.png" alt="Danielle Evan">
            </div>
            <div class="comment-content">
                <h3 class="comment-author-name">Danielle Evan</h3>
                <p class="comment-text">Wellness >>></p>
            </div>
        </div>

        <!-- Commentaire 6 -->
        <div class="comment-item">
            <div class="comment-author-avatar">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user6.png" alt="Kayla Rosa">
            </div>
            <div class="comment-content">
                <h3 class="comment-author-name">Kayla Rosa</h3>
                <p class="comment-text">Est-ce que je peux essayer les plats d’un régime MIND même si je suis un régime Simple ?</p>
            </div>
        </div>
    </div>

    <!-- Formulaire de commentaire -->
    <div class="forum-comment-form">
        <?php
        $comment_form_args = array(
            'title_reply' => '',
            'label_submit' => __('Envoyez', 'textdomain'),
            'comment_field' => '<textarea id="comment" name="comment" aria-required="true" placeholder="Partagez votre ressenti"></textarea>',
            'fields' => apply_filters('comment_form_default_fields', array(
                'author' => '<p class="comment-form-author"><input id="author" name="author" type="text" placeholder="Nom" size="30" /></p>',
                'email' => '<p class="comment-form-email"><input id="email" name="email" type="email" placeholder="Email" size="30" /></p>',
            )),
            'class_submit' => 'submit-button',
        );

        comment_form($comment_form_args);
        ?>
        <div class="custom-comment-form">
    <textarea class="custom-comment-field" placeholder="Partagez votre ressenti"></textarea>
</div>
    </div>
</div>
<button class="custom-submit-button">Envoyez</button>

<?php get_footer();?>

