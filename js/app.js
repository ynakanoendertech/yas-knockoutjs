"use strict";

require(['jquery', 'ko', 'AppViewModel'], function($, ko, AppViewModel) {

    $(document).ready(function() {

        // Activate
        ko.applyBindings(new AppViewModel(['apple', 'banana', 'cherry']));
    });
});