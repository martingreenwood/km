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

                /* grab the url for the full size featured image */
                $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full');

                ?>
                <div class="hero">
                    <div class="hero__background" data-bg="<?php echo $featured_img_url ?>"></div>

                    <div class="hero__inner">
                        <div class="hero__inner--branding">
                        <?php
                            echo wp_get_attachment_image( get_theme_mod( 'custom_logo' ), 'full' );
                        ?>
                        </div>
                    </div>
                </div>
                <?php

            endwhile;
        endif;
        ?>

	</main>

<?php
get_footer();
