(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $('#toggle').click(function(e) {
            e.preventDefault();
            $('.sidebar ul').toggle(500);
        });
    });




    jQuery(window).load(function() {

    });
}(jQuery));