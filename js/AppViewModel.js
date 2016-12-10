define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.acceptedNumericValue = ko.observable(123);
        self.lastInputWasValid = ko.observable(true);

        self.attemptedValue = ko.pureComputed({
            read: self.acceptedNumericValue,
            write: function(value) {
                if (isNaN(value)) {
                    self.lastInputWasValid(false);
                } else {
                    self.lastInputWasValid(true);
                    self.acceptedNumericValue(value);
                }
            },
            owner: self
        });

    }

    return AppViewModel;
});
