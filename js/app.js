"use strict";

require(['jquery', 'ko', 'ReservationsViewModel'], function($, ko, ReservationsViewModel) {

    $(document).ready(function() {

        // Activate
        ko.applyBindings(new ReservationsViewModel());
    });
});