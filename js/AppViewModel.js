define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.myMessage = ko.observable("hello");
    }

    return AppViewModel;
});
