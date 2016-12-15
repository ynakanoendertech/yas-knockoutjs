define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.items = ko.observableArray([
            { itemName: 'Choice 1' },
            { itemName: 'Choice 2' }
        ]);
        self.chosenItems = ko.observableArray();
    }

    return AppViewModel;
});
