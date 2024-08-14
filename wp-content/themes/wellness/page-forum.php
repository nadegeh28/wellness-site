<?php get_header();?>

<div class="forum-container fade-in">
    <h3 class="part1 fade-in">N'hésitez pas à poser vos questions</h3>
    <h3 class="part2 fade-in">ou à partager vos connaissances avec les autres.</h3>
    <br>

    <div class="forum-comments fade-in">
        <!-- Commentaire 1 -->
        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user1.png" alt="Alicia Carmen">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Alicia Carmen</h3>
                <p class="comment-text fade-in">Wellness est parfaite pour les débutants, maintenant je sais quel régime suivre ! Mercii Wellness</p>
            </div>
        </div>

        <!-- Commentaire 2 -->
        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user2.png" alt="Lorie Samba">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Lorie Samba</h3>
                <p class="comment-text fade-in">Grâce à Wellness, j’ai pu préparer des petits plats adaptés à mon diabète.</p>
            </div>
        </div>

        <!-- Commentaire 3 -->
        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user3.png" alt="Mathy Eka">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Mathy Eka</h3>
                <p class="comment-text fade-in">Le fait que les plats choisis par Wellness prennent en compte nos carences durant nos périodes est super cool!</p>
            </div>
        </div>

        <!-- Commentaire 4 -->
        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user4.png" alt="Maeva Martinez">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Maeva Martinez</h3>
                <p class="comment-text fade-in">Le site est simple à comprendre j’adore!</p>
            </div>
        </div>

        <!-- Commentaire 5 -->
        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user5.png" alt="Danielle Evan">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Danielle Evan</h3>
                <p class="comment-text fade-in">Wellness >>></p>
            </div>
        </div>

        <!-- Commentaire 6 -->
        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user6.png" alt="Kayla Rosa">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Kayla Rosa</h3>
                <p class="comment-text fade-in">Est-ce que je peux essayer les plats d’un régime MIND même si je suis un régime Simple ?</p>
            </div>
        </div>
    </div>

    <!-- Formulaire de commentaire -->
    <div class="forum-comment-form fade-in">
        <?php
        $comment_form_args = array(
            'title_reply' => '',
            'label_submit' => __('Envoyez', 'textdomain'),
            'comment_field' => '<textarea id="comment" name="comment" aria-required="true" placeholder="Partagez votre ressenti" class="fade-in"></textarea>',
            'fields' => apply_filters('comment_form_default_fields', array(
                'author' => '<p class="comment-form-author fade-in"><input id="author" name="author" type="text" placeholder="Nom" size="30" /></p>',
                'email' => '<p class="comment-form-email fade-in"><input id="email" name="email" type="email" placeholder="Email" size="30" /></p>',
            )),
            'class_submit' => 'submit-button fade-in',
        );

        comment_form($comment_form_args);
        ?>
        <div class="custom-comment-form fade-in">
            <textarea class="custom-comment-field fade-in" placeholder="Partagez votre ressenti"></textarea>
        </div>
    </div>
    <button class="custom-submit-button fade-in">Envoyez</button>
</div>

<?php get_footer();?>
