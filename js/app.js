"use strict";

require(['jquery', 'ko', 'AppViewModel'], function($, ko, AppViewModel) {

    $(document).ready(function() {

        ko.components.register('special-offer', {
            template: '<div class="offer-box" data-bind="text: productName"></div>'
        });

        // Activate
        //ko.applyBindings(new AppViewModel());
        ko.applyBindings();
    });
});