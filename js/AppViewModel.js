define(['ko'], function(ko) {
    "use strict";

    // View model
    return function AppViewModel(items) {

        // Preserve this
        var self = this;

        // Instalnce properties
        self.itemToAdd = ko.observable("");  // init with ""
        self.myItems = ko.observableArray(items);

        // Instance methods
        self.addItem = function() {
            if (self.itemToAdd() != "") {
                self.myItems.push(self.itemToAdd());
                self.itemToAdd("");  // reset with ""
            }
        };
    };
});
