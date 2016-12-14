define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.outerHandler = function() { console.log('outer') };
        self.innerHandler = function() { console.log('inner') };

    }

    return AppViewModel;
});
