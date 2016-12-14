define(['jquery', 'jquery-color', 'ko'], function($, jQueryColor, ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.myItems = ko.observableArray([ 'A', 'B', 'C' ]);

        self.yellowFadeIn = function(element, index, data) {
            $(element).filter("li")
                .animate( { backgroundColor: 'yellow' }, 200)
                .animate( { backgroundColor: 'white' }, 800);
        };

        self.addItem = function() {
            self.myItems.push("New Item");
        };
    }

    return AppViewModel;
});
