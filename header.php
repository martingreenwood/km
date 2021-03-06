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
	<script src="<?php echo get_stylesheet_directory_uri() ?>/node_modules/rellax/rellax.min.js"></script>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<?php wp_body_open(); ?>

	<header class="pre-loader">

		<h1 class="pre-loader__logo">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 809.27 292.29"><defs><style>.cls-1{fill:#6a1d2f;fill-rule:evenodd;}</style></defs><path class="cls-1" d="M994.71,408.35c6.09-9.63,31.75,3.87-11,17.41-12.38-35.16,11-32.72,11-17.41Zm-38.82-7.51c0-20.52-31.3-23.79-14.7,23.33C998.43,406,964,387.93,955.89,400.84Z" transform="translate(-253.52 -224.25)"/><path class="cls-1" d="M321.6,462.85c6.07-9.63,31.74,3.87-11,17.41-12.39-35.16,11-32.72,11-17.41Zm39.66,6.56c0-18.09-27.61-21-13,20.6C398.8,474,368.46,458,361.26,469.41Z" transform="translate(-253.52 -224.25)"/><path class="cls-1" d="M651.07,447.61a128.57,128.57,0,0,1,7.29-12.48,60.57,60.57,0,0,1,8.69-10.61c2.66-2.52,6-4.69,9.79-4.69,6,0,10.77,2.53,12.85,8.35a33.87,33.87,0,0,1,1.09,3.78q2.25-5.1,4.53-10.19A220.36,220.36,0,0,1,706,400.84a92.9,92.9,0,0,1,11.63-16.12c3.49-3.76,8-7.13,13.38-7.13,7.22,0,10.63,5.28,11.59,11.9,1.16,7.9.46,16.6-.69,24.48-1.51,10.46-3.51,20.87-5.77,31.19s-4.41,20.59-6.41,30.92a142.28,142.28,0,0,0-2.93,23.17c0,1.21-.18,6.43,1.91,6.43,4.21,0,9.54-5.55,12.06-8.43A177.81,177.81,0,0,0,756.58,476c48.36-75.34,78.64-62.25,165.31-45,28.57,5.69,66.12,14.24,94.19,4.24,11.35-4.06,19.88-11.25,26.56-20.51,3.93-5.48,2.35-24.29,11.72-22.64,11.44,2,9.13,15,5.25,21.95C1050,429.65,1037,442,1018.2,447.67c-30.88,9.28-74.62.07-105-8.25-82.79-22.67-104.56-22.31-148.49,44.82a148.4,148.4,0,0,1-17.57,22.24c-4.9,5-11.47,10.06-18.84,10.06-7.56,0-12-4.49-13.63-11.7-1.72-7.87-1.3-16.69-.27-24.63,1.36-10.51,3.4-21,5.8-31.28s4.78-20.64,7.11-31a193.25,193.25,0,0,0,4.07-23.29c.1-1.07.39-5.44-.32-6.22-2.12,0-4.82,2.67-6.12,4.1a80.8,80.8,0,0,0-9.07,12.63,159.94,159.94,0,0,0-9,17.58q-4.2,9.48-8.25,19c-2.31,5.42-4.54,10.88-6.61,16.41-1.37,3.67-2.76,7.34-4.26,11.3a5.29,5.29,0,0,1-6.2,2.9,5.36,5.36,0,0,1-4.35-5.58,67,67,0,0,1,1-9.14,121.1,121.1,0,0,0,1.12-12.77,46.42,46.42,0,0,0-.86-11.22c-.12-.53-.71-3-1.53-3-2.34,0-6.1,5.3-7.21,7A158.83,158.83,0,0,0,659,456.38c-3.33,6.8-6.47,13.7-9.34,20.71-1.85,4.54-3.76,9.1-5.5,13.75a5.25,5.25,0,0,1-6.75,3.31,5.13,5.13,0,0,1-3.87-6.2c1.29-9.65,2.33-19.28,3.2-29,.14-1.63.28-3.25.41-4.89l0,.06a178.08,178.08,0,0,1-16.33,21.47,114.35,114.35,0,0,1-19.56,17.67c-6.49,4.57-13.84,7.65-21.87,7.65a35.45,35.45,0,0,1-24.93-9.74,43.59,43.59,0,0,1-8.07-9.91l-1.32,17-.17.41c-1,2.49-3,4.21-5.82,3.87a5.58,5.58,0,0,1-4.78-4.84l0-.21v-.21c-.44-8.34-.35-16.86-.23-25.21.15-10.76.63-21.52,1.3-32.25-50.26,32.94-59.73,27-140.9,10.79-28.56-5.69-66.12-14.25-94.18-4.23-11.35,4-19.87,11.24-26.55,20.52-3.94,5.47-2.36,24.27-11.74,22.62-11.44-2-9.13-15-5.25-21.94C266.35,452,279.28,439.62,298.1,434c30.89-9.28,74.62-.08,105,8.25,96.78,21.55,92.56,7.42,133.23-17.52,1-13.47,1.81-20.59,3.4-34q2.75-23.49,6.9-46.76c2.68-15,6-29.92,10.18-44.59A221.69,221.69,0,0,1,571,261.45c4.79-9.72,10.86-19.24,18.74-26.76,6.84-6.53,15-10.44,24.5-10.44a18.67,18.67,0,0,1,11.39,3.33,21.75,21.75,0,0,1,6.61,8.2,40.57,40.57,0,0,1,3.23,10.39,61.23,61.23,0,0,1,1,10.44c-.37,14.55-4.69,29.37-10.08,42.79A397.68,397.68,0,0,1,603.25,347q-13.35,23.55-28.09,46.29-12.45,19.15-25.09,38.19c-.24,3-.44,6-.58,9,.92-1,1.87-2,2.85-2.93a104.2,104.2,0,0,1,13.7-11.1,158,158,0,0,1,14.27-8.66,97.79,97.79,0,0,1,12.19-5.63c3.51-1.5,6.77-.41,8.19,3.25a6.6,6.6,0,0,1-2.71,8.29l-.3.18-.32.13a101.7,101.7,0,0,0-12.49,5.8,175.12,175.12,0,0,0-15.13,9,77.21,77.21,0,0,0-12.83,10.62c-2.64,2.73-5.09,6.16-5.39,10a24.82,24.82,0,0,0,2.28,10,33.76,33.76,0,0,0,6.56,9.73,49,49,0,0,0,9.54,7.8,17.84,17.84,0,0,0,9.48,3c6.22,0,11.94-2.71,16.87-6.32a98,98,0,0,0,17.16-16.28,212,212,0,0,0,15-20.16,190.21,190.21,0,0,0,10.16-17.14,5.87,5.87,0,0,1,2.67-3.06,9.29,9.29,0,0,1,4.66-1.3,6.36,6.36,0,0,1,5,2.42,8.68,8.68,0,0,1,1.81,5.85q-.76,6.78-1.58,13.54ZM552.7,407.87q9.15-14.13,18.27-28.27,13.6-21.11,25.59-43.19a403.5,403.5,0,0,0,20.28-43.08c4.59-11.52,8.42-24.4,8.76-36.8a66.74,66.74,0,0,0-.45-7.48,23.64,23.64,0,0,0-1.84-7,15.15,15.15,0,0,0-3.66-5.22,7.68,7.68,0,0,0-5.38-1.76c-6.47,0-11.8,2.89-16.32,7.41-6.06,6.07-10.71,13.93-14.33,21.67a196.79,196.79,0,0,0-11.54,32.58q-5.21,19.46-8.9,39.27-4,21.06-6.86,42.32C555,388.17,553.75,398,552.7,407.87Z" transform="translate(-253.52 -224.25)"/></svg>
		</h1>

		<div class="pre-loader__loader">
			<svg class="pre-loader__inner" width="60px" height="60px" viewBox="0 0 80 80">
				<path class="circlebg" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
				<path id="page-loader-circle" class="circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"/>
			</svg>
		</div>

	</header>

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
						<a href="#" class="rsvp-trigger">RSVP</a>
					</li>
				</ul>
			</nav>

		</header>
