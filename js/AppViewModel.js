define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.displayMessage = ko.observable(false);

    }

    return AppViewModel;
});
