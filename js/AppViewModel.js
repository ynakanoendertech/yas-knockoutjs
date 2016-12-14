define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.detailsEnabled = ko.observable(false);
        self.enableDetails = function() {
            self.detailsEnabled(true);
        };
        self.disableDetails = function() {
            self.detailsEnabled(false);
        };
    }

    return AppViewModel;
});
