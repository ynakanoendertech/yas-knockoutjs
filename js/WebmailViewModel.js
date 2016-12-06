define(['ko'], function(ko) {
    "use strict";

    // View model
    return function WebmailViewModel() {
        // Preserve this
        var self = this;

        // Data
        self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
        self.chosenFolderId = ko.observable();

        // Behaviors
        self.goToFolder = function(folder) {
          self.chosenFolderId(folder);
        };

        // CSS binding
        self.currentProfit = ko.observable(150000);
        self.setNegativeProfit = function() {
            self.currentProfit(-50);
        };
    };
});