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

	<main class="site-main">

    <?php if ( have_posts() ): while ( have_posts() ): the_post(); ?>
    <?php $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); ?>

    <section class="site-main__section site-main__section--intro">
        <div class="bg" data-bg="<?php echo $featured_img_url; ?>"></div>
        <h1 class="rellax">Fall <small>in</small><br>Love</h1>
        <!-- <a class="scroll scroll--down" href="#invite">
            <span class="circle">
                <svg width="100" height="100" class="svg" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke-width="4" class="symbol" />
                </svg>
                <span class="line"></span>
                <span class="arrow"></span>
            </span>
        </a> -->
    </section>

    <section class="site-main__section site-main__section--details">
        <anchor id="invite"></anchor>
        <div class="the-date">
            <header>The Date</header>
            <span>Saturday<br>
            November 5th<br>
            2022</span>
        </div>
        <div class="the-invite">
            <header>The Invite</header>
            <p>Join the celebration as Katie Durber and Martin Greenwood say "I do" at the picturesque Hatherley Manor Hotel &amp Spa, Gloucestershire.</p>
            <a href="<?php echo home_url( 'rsvp' ) ?>">RSVP</a>
        </div>
    </section>

    <section class="site-main__section site-main__section--images">

        <span class="rellax date date--day">05</span>

        <div class="an-image an-image--first">
            <div class="bg" data-bg="https://source.unsplash.com/random"></div>
            <p><span>18.18.18</span> Something happened</p>
        </div>

        <div class="an-image an-image--second">
            <div class="bg" data-bg="https://source.unsplash.com/random"></div>
            <p><span>18.18.18</span> Something happened</p>
        </div>

        <span class="rellax date date--month">11</span>

        <div class="an-image an-image--third">
            <div class="bg" data-bg="https://source.unsplash.com/random"></div>
            <p><span>18.18.18</span> Something happened</p>
        </div>

        <div class="an-image an-image--fourth">
            <div class="bg" data-bg="https://source.unsplash.com/random"></div>
            <p><span>18.18.18</span> Something happened</p>
        </div>

        <span class="rellax date date--year">22</span>

    </section>

    <section class="site-main__section site-main__section--extras">

        <header class="site-main__section--extras-header">
            <h2>The Venue</h2>
        </header>


        <section class="site-main__section--extras-details">

            <div class="the-venue">
                <span>Hatherley Manor<br>
                Hotel &amp; SPA<br>
                Gloucestershire</span>
            </div>

            <div class="the-travel">
                <header>Directions</header>
                <p>Hatherley Manor Hotel &amp; Spa, situated in Down Hatherley, lies three miles from the historic city of Gloucester and six miles from the regency spa town of Cheltenham.</p>
                <a target="_blank" href="https://www.google.com/maps?ll=51.90297,-2.206012&z=15&t=m&hl=en&gl=GB&mapclient=embed&daddr=Hatherley+Manor+Hotel+and+Spa+Down+Hatherley+Ln+Gloucester+GL2+9QA@51.9029702,-2.2060116">Directions</a>
            </div>
            <div class="the-lodging">
                <header>The Lodging</header>
                <p>We recommend that guests stay at the venue for optimial parting and maximum fun.</p>
                <a target="_blank" href="https://hatherleymanor.classicbritishhotels.com/convert/site/Hatherley%20Manor%20Hotel/en/index.php">Book a Room</a>
            </div>
            <div class="the-lodging--other">
                <header>The Other Lodging</header>
                <a target="_blank" href="https://www.travelodge.co.uk/hotels/401/Tewkesbury-hotel">Travelodge, Tewkesbury</a>
                <a target="_blank" href="https://www.premierinn.com/gb/en/hotels/england/gloucestershire/gloucester/gloucester-longford.html?cid=GLBC_GLOLON">Premier Inn, Glocester</a>
                <a target="_blank" href="https://www.ihg.com/holidayinn/hotels/gb/en/gloucester/glcea/hoteldetail">Holiday Inn, Gloucester</a>
            </div>
        </section>

        <aside class="the-manor rellax"></aside>

    </section>

    <?php endwhile; endif; ?>

	</main>

<?php
get_footer();
