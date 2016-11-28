define(['ko'], function(ko) {
    "use strict";

    // View model
    return function AppViewModel() {
        
        // Preserve this
        var self = this;
        
        self.firstName = ko.observable("Bert");
        self.lastName = ko.observable("Bertington");
        self.test = 1;

        console.dir(typeof self.test);
        console.dir(typeof self.firstName);

        self.fullName = ko.computed(function() {
            return self.firstName() + " " + self.lastName();
        });  // Defines the value of this, which is function c() of KnockoutJs
    };
});
