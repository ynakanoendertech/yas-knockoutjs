define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.myItems = [
            { name: 'Item 1', id: 1, disable: ko.observable(false)},
            { name: 'Item 3', id: 3, disable: ko.observable(true)},
            { name: 'Item 4', id: 4, disable: ko.observable(false)}
        ];

        self.setOptionDisable = function(option, item) {
            console.dir(option);
            console.dir(item);
            ko.applyBindingsToNode(option, { disable: item.disable }, item);
        };
    }

    return AppViewModel;
});
