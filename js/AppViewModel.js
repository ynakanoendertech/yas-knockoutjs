define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.places = ko.observableArray(['London', 'Paris', 'Tokyo']);

        self.removePlace = function(place) {
            self.places.remove(place);
        };
    }

    return AppViewModel;
});
