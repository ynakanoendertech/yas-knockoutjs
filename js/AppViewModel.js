define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.petList = ko.observableArray([
            { name: "Bungle", type: "Bear" },
            { name: "George", type: "Hippo" },
            { name: "Zippy", type: "Unknown" }
        ]);
    }

    return AppViewModel;
});
