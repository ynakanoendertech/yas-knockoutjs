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

        self.fullName = ko.pureComputed(function() {
            return self.firstName() + " " + self.lastName();
        });

        self.fullNameWrong = ko.pureComputed(function() {
            return self.firstName + " " + self.lastName;
        });

    };
});
