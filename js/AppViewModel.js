define(['ko'], function(ko) {
    "use strict";

    // View model
    return function AppViewModel() {
        this.firstName = ko.observable("Bert");
        this.lastName = ko.observable("Bertington");
        this.test = 1;

        console.dir(typeof this.test);
        console.dir(typeof this.firstName);
    };
});
