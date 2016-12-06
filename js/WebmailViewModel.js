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

        self.giantAvailableTypes = ['fire', 'poison', 'earth'];
        self.currentGiantType = ko.observable(0);
        self.giantTypeClass = ko.computed(function() {
            var id = self.currentGiantType();
            return self.giantAvailableTypes[ id ] + '-giant';
        });
        self.giantTypeLabel = ko.computed(function() {
            var id = self.currentGiantType();
            var label = self.giantAvailableTypes[ id ] + ' Giant';
            return label.charAt(0).toUpperCase() + label.slice(1);
        });
        self.toggleGiantType = function() {
            var divisor = self.giantAvailableTypes.length;
            var currentId = self.currentGiantType();
            var nextId = (currentId + 1) % divisor;
            self.currentGiantType(nextId);
        };
    };
});