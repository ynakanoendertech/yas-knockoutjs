define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.hasCellphone = ko.observable(false);
        self.cellphoneNumber = "";
    }

    return AppViewModel;
});
