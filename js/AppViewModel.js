define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.currentProfit = ko.observable(150000);

        self.isSevere = ko.pureComputed(function() {
            return self.currentProfit() < 0;
        });

        setTimeout(function() {
            console.log('Change ' + self.currentProfit() + ' to -50');
            self.currentProfit(-50);
        }, 3000);
    }

    return AppViewModel;
});
