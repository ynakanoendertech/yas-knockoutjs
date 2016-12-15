define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.wantsSpam = ko.observable(true);

        setTimeout(function() {
            console.log('to false');
            self.wantsSpam(false);
        }, 3000);
    }

    return AppViewModel;
});
