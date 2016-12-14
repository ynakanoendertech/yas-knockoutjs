define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.url = ko.observable("year-end.html");
        self.details = ko.observable("Report including final year-end statistics");
        self.dataSomething = ko.observable("This is something");
    }

    return AppViewModel;
});
