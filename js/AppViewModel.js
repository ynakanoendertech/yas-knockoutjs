define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.firstValue = ko.observable("hello");
        self.secondValue = "hello, again";

        self.showValues = function() {
            console.log('First value : ' + self.firstValue());
            console.log('Second value: ' + self.secondValue);
        };
    }

    return AppViewModel;
});
