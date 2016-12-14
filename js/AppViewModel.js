define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.numberOfClicks = ko.observable(0);

        self.incrementClickCounter = function() {
            var previousCount = self.numberOfClicks();
            self.numberOfClicks(previousCount + 1);
        };
    }

    return AppViewModel;
});
