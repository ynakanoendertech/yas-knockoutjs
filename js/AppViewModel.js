define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.shouldShowMessage = ko.observable(true);
        self.price = ko.observable(51);
        self.cellphoneNumber = ko.observable('111-222-3333');
        self.parseAreaCode = function(cellNum) {
            return cellNum.substring(0, 3);
        };
        self.myFunctionValue = ko.observable('initial value');
        self.myFunction = function(param, data) {
            self.myFunctionValue(param);
        };

        setTimeout(function() {
            self.cellphoneNumber('555-666-7777');
        }, 3000);
    }

    return AppViewModel;
});
