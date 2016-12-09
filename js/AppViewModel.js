define(['ko'], function(ko) {
    "use strict";

    // View model
    return function AppViewModel() {

        // Preserve this
        var self = this;

        // Instance properties

        self.firstName = ko.observable("Bob");
        self.lastName = ko.observable("Smith");

        // Instance methods

        self.fullNameWrong = ko.computed(function() {
            return self.firstName + " " + self.lastName;
        });

        self.fullName = ko.computed(function() {
            return self.firstName() + " " + self.lastName();
        });
    };
});
