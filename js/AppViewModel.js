define(['ko'], function(ko) {
    "use strict";

    // View model
    return function AppViewModel() {

        // Preserve this
        var self = this;

        // Instance properties

        self.city = "London";
        self.coords = {
            latitude:  51.5001524,
            longitude: -0.1262362
        };
    };
});
