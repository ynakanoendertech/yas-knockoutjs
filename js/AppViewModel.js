define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.isSelected = ko.observable(false);
        self.setIsSelected = function() {
            this.isSelected(true);
        };
    }

    return AppViewModel;
});
