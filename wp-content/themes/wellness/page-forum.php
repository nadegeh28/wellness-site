<?php get_header(); ?>

<div class="forum-container fade-in">
    <h3 class="part1 fade-in">N'hésitez pas à poser vos questions</h3>
    <h3 class="part2 fade-in">ou à partager vos connaissances avec les autres.</h3>
    <br>

    <div class="forum-comments fade-in">
        <!-- Commentaires statiques -->
        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user1.png" alt="Alicia Carmen">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Alicia Carmen</h3>
                <p class="comment-text fade-in">Wellness est parfaite pour les débutants, maintenant je sais quel régime suivre ! Mercii Wellness</p>
            </div>
        </div>

        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user2.png" alt="Lorie Samba">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Lorie Samba</h3>
                <p class="comment-text fade-in">Grâce à Wellness, j’ai pu préparer des petits plats adaptés à mon diabète.</p>
            </div>
        </div>

        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user3.png" alt="Mathy Eka">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Mathy Eka</h3>
                <p class="comment-text fade-in">Le fait que les plats choisis par Wellness prennent en compte nos carences durant nos périodes est super cool!</p>
            </div>
        </div>

        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user4.png" alt="Maeva Martinez">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Maeva Martinez</h3>
                <p class="comment-text fade-in">Le site est simple à comprendre j’adore!</p>
            </div>
        </div>

        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user5.png" alt="Danielle Evan">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Danielle Evan</h3>
                <p class="comment-text fade-in">Wellness >>></p>
            </div>
        </div>

        <div class="comment-item fade-in">
            <div class="comment-author-avatar fade-in">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/img/user6.png" alt="Kayla Rosa">
            </div>
            <div class="comment-content fade-in">
                <h3 class="comment-author-name fade-in">Kayla Rosa</h3>
                <p class="comment-text fade-in">Est-ce que je peux essayer les plats d’un régime MIND même si je suis un régime Simple ?</p>
            </div>
        </div>

        <!-- Commentaires dynamiques venant de la base de données -->
        <?php
        // Fetch the comments for this page
        $comments = get_comments(array(
            'post_id' => get_the_ID(),
            'status' => 'approve', // Only show approved comments
        ));

        // Display each comment
        foreach ($comments as $comment) :
        ?>
            <div class="comment-item fade-in">
                <div class="comment-author-avatar fade-in">
                    <?php echo get_avatar($comment->comment_author_email, 64); ?>
                </div>
                <div class="comment-content fade-in">
                    <h3 class="comment-author-name fade-in"><?php echo esc_html($comment->comment_author); ?></h3>
                    <p class="comment-text fade-in"><?php echo esc_html($comment->comment_content); ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

    <!-- Formulaire de soumission de commentaires avec wpDiscuz -->
    <div class="forum-comment-form fade-in">
        <?php
        if (function_exists('wpdiscuz')) {
            wpdiscuz();
        }
        ?>
    </div>
</div>

<?php get_footer(); ?>
