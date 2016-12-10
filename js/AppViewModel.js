define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.shouldShowMessage = ko.observable(true);

        setTimeout(function() {
            console.log(false);
            self.shouldShowMessage(false);
        }, 3000);

        setTimeout(function() {
            console.log(true);
            self.shouldShowMessage(true);
        }, 6000);
    }

    return AppViewModel;
});
