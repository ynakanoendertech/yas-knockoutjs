define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.lastInterest = ko.observable();
        self.places = ko.observableArray(['London', 'Paris', 'Tokyo']);
        self.logMouseOver = function(place) {
            self.lastInterest(place);
        };

    }

    return AppViewModel;
});
