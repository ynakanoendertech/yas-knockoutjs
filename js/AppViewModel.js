define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.hasCellphone = ko.observable(true);
        self.cellphoneNumber = ko.observable("111-222-3333");
    }

    return AppViewModel;
});
