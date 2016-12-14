define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.myValue = ko.observable('abc');
    }

    return AppViewModel;
});
