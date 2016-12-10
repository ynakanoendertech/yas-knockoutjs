define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.price = ko.observable(25.99);

        self.formattedPrice = ko.pureComputed({
            read: function() {
                return '$' + self.price().toFixed(2);
            },
            write: function(value) {
                value = parseFloat(value.replace(/[^\.\d]/g, ""));
                self.price(isNaN(value) ? 0 : value);
            },
            owner: self
        });

    }

    return AppViewModel;
});
