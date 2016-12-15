define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.someModelProperty = ko.observable("");
    }

    return AppViewModel;
});
