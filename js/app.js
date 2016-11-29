"use strict";

require(['jquery', 'ko', 'WebmailViewModel'], function($, ko, WebmailViewModel) {

    $(document).ready(function() {

        // Activate
        ko.applyBindings(new WebmailViewModel());
    });
});