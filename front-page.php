<?php
/**
 * The front page template file
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package km
 */

get_header();
?>

	<main id="primary" class="site-main">

        <?php
        if ( have_posts() ):
            while ( have_posts() ):
                the_post();

                $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full');

            endwhile;
        endif;
        ?>

	</main>

<?php
get_footer();
