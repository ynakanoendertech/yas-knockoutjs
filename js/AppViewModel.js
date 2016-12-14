define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        // Data
        self.name = ko.observable("Bert Bertington");
        self.editing = ko.observable(false);

        // Behaviors
        self.edit = function() {
            self.editing(true);
        };
    }

    return AppViewModel;
});
