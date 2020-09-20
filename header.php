<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package km
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<?php wp_body_open(); ?>

	<div class="site-wrap">

		<div class="site-initials">
			<span class="site-initials--vertical">
				<span>K</span>
				<span>/</span>
				<span>M</span>
			</span>
		</div>

		<div class="site-date">
			<span class="site-date--vertical">
				<span>05</span>
				<span>/</span>
				<span>11</span>
			</span>
		</div>

		<div class="site-logo">
		</div>

		<header class="site-header">

			<nav class="site-header__nav">
				<ul class="site-header__menu">
					<li class="site-header__menu-item">Gloucester, England</li>
					<li class="site-header__menu-item">
						<a href="<?php echo home_url( 'rsvp') ?>">RSVP</a>
					</li>
					<li class="site-header__menu-item">
						<a href="<?php echo home_url( 'registry') ?>">REGISTRY</a>
					</li>
				</ul>
			</nav>

		</header>
