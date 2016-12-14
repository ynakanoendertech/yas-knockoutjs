define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.userName = ko.observable("");
        self.userPassword = ko.observable("abc");
    }

    return AppViewModel;
});
