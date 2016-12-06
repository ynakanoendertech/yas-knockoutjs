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
        self.profitStatus = ko.computed(function() {
            return self.currentProfit() < 0 ? "profitWarning" : "profitPositive";
        });
        self.toggleProfitValue = function() {
            var current = self.currentProfit();
            var newValue = current * (-1);
            self.currentProfit(newValue);
        };
    };
});