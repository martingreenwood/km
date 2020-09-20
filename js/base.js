/**
 * File base.js.
 *
 * Theme features
 * global jQuery
 */

( function( $ ) {

    console.log("something");

    $(window).load(function () {
        $('[data-bg]').each(function () {
            $(this).css('background-image', 'url(' + $(this).data('bg') + ')');
        });
    });
}( jQuery ) );
