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
            <a href="#" class="rsvp-trigger">RSVP</a>
        </div>
    </section>

    <section class="site-main__section site-main__section--images">

        <span class="rellax date date--day">05</span>

        <div class="an-image an-image--first">
            <div class="bg" data-bg="https://katieandmartin.com/wp-content/uploads/2020/10/IMG_8822-min.jpg"></div>

            <p><span>01.07.2019</span> Our first date</p>
        </div>

        <div class="an-image an-image--second">
            <div class="bg" data-bg="https://katieandmartin.com/wp-content/uploads/2020/10/IMG_8974-min.jpg"></div>
            <p><span>24.03.2020</span> we became a family</p>
        </div>

        <span class="rellax date date--month">11</span>

        <div class="an-image an-image--third">
            <div class="bg" data-bg="https://katieandmartin.com/wp-content/uploads/2020/10/IMG_8987-min.jpg"></div>
            <p><span>28.08.2020</span> She said yes!</p>
        </div>

        <div class="an-image an-image--fourth">
            <div class="bg" data-bg="https://katieandmartin.com/wp-content/uploads/2020/10/IMG_9281-min.jpg"></div>
            <p><span>05.11.2022</span> We're getting married</p>
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

    <section class="rvsp-panel">
        <div class="rvsp-panel--inner">
            <div class="rvsp-panel--form">
                <?php echo gravity_form( "RSVP", true, true, false, null, true, 100, true ); ?>
            </div>
        </div>
        <a class="close-rsvp" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.096 496.096" xmlns:v="https://vecta.io/nano"><path d="M259.4 247.998L493.754 13.654a8 8 0 0 0-11.312-11.312L248.098 236.686 13.754 2.342C10.576-.727 5.512-.64 2.442 2.54a8 8 0 0 0 0 11.115l234.344 234.344L2.442 482.342a8 8 0 0 0-.196 11.312 8 8 0 0 0 11.312.196c.067-.064.132-.13.196-.196L248.098 259.3l234.344 234.344a8 8 0 0 0 11.312-11.312L259.4 247.998z"/></svg></a>
    </section>

<?php
get_footer();
