"use strict";

require(['jquery', 'ko', 'AppViewModel'], function($, ko, AppViewModel) {

    $(document).ready(function() {

        // Activate
        ko.applyBindings(AppViewModel);
    });
});