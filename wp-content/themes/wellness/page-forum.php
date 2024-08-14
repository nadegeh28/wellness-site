<?php
/**
 * Template Name: Page Forum
 */

get_header();
?>

<div class="forum-container">
    <h2 class="forum-title">N'hésitez pas à poser vos questions ou à partager vos connaissances avec les autres.</h2>

    <div class="forum-comments">
        <?php
        $args = array(
            'post_id' => $post->ID, // ID de la page forum
            'status' => 'approve' // Montrer uniquement les commentaires approuvés
        );
        $comments = get_comments($args);

        foreach ($comments as $comment) : ?>
            <div class="comment-item">
                <div class="comment-author-avatar">
                    <?php echo get_avatar($comment->comment_author_email, 64); ?>
                </div>
                <div class="comment-content">
                    <h3 class="comment-author-name"><?php echo $comment->comment_author; ?></h3>
                    <p class="comment-text"><?php echo $comment->comment_content; ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

    <div class="forum-comment-form">
        <?php
        $comment_form_args = array(
            'title_reply' => '',
            'label_submit' => __('Envoyez', 'textdomain'),
            'comment_field' => '<textarea id="comment" name="comment" aria-required="true" placeholder="Partagez votre ressenti"></textarea>',
            'fields' => apply_filters('comment_form_default_fields', array(
                'author' => '<p class="comment-form-author"><input id="author" name="author" type="text" placeholder="Nom" size="30" /></p>',
                'email' => '<p class="comment-form-email"><input id="email" name="email" type="text" placeholder="Email" size="30" /></p>',
            )),
            'class_submit' => 'submit-button',
        );

        comment_form($comment_form_args);
        ?>
    </div>
</div>

<?php
get_footer();
?>
