define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        // Private function
        function showFormId(formElement) {
            if (formElement.length && formElement.id) {
                console.dir(formElement.id);
            }
        }

        self.doSomething = function(formElement) {
            showFormId(formElement);
            console.log('something');
        };

        self.doSomething2 = function(formElement) {
            showFormId(formElement);
            console.log('something 2');
            return true;
        };
    }

    return AppViewModel;
});
