define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.doSomething = function() {
            console.log('something');
        };

        self.doSomething2 = function() {
            console.log('something 2');
            return true;
        };
    }

    return AppViewModel;
});
