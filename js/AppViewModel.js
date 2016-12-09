define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        // Instance properties
        self.firstName = ko.observable("Bob");
        self.lastName = ko.observable("Smith");

        // Instance methods
        self.fullName = ko.pureComputed({
            read: function() {
                return self.firstName() + " " + self.lastName();
            },
            write: function(value) {
                var lastSpacePos = value.lastIndexOf(" ");
                if (lastSpacePos > 0) {
                    this.firstName(value.substring(0, lastSpacePos));
                    this.lastName(value.substring(lastSpacePos + 1));
                }
            },
            owner: self
        });
    }

    return AppViewModel;
});
