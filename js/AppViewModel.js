define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.name = ko.observable("Bob");
        self.manager = ko.observable({
            name: "Kat"
        });
    }

    return AppViewModel;
});
