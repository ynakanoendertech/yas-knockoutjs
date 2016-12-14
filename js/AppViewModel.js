define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel(params) {

        // Preserve this
        var self = this;

        self.text = ko.observable(params && params.initialText || '');
    }

    return AppViewModel;
});
