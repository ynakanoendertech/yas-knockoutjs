define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.employees = ko.observableArray([
            { name: "Kari", active: ko.observable(true) },
            { name: "Bryan", active: ko.observable(false) },
            { name: "Nora", active: ko.observable(false) }
        ]);

        self.displayMode = function(employee, bindingContext) {

            console.dir(bindingContext["$parent"]);

            var myName = bindingContext["$rawData"].name;
            if (myName == "Nora") {
                employee.active(true);
            }

            return employee.active() ? "active" : "inactive";
        };

        setTimeout(function() {
            self.employees()[1].active(true);  // Set active template for "Bryan"
        }, 3000);
    }

    return AppViewModel;
});
