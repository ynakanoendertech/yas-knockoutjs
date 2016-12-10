define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.produce = [ 'Apple', 'Banana', 'Celery', 'Corn', 'Orange', 'Spinach' ];

        self.selectedProduce = ko.observableArray([ 'Corn', 'Orange' ]);
        self.selectedProduce.subscribe(function(newValue) {
            console.log("  The new value is [" + newValue + "]");
        });

        self.selectedAllProduce = ko.pureComputed({
            read: function() {
                console.log('read');
                return self.selectedProduce().length === self.produce.length;
            },
            write: function(value) {
                console.log('write');
                self.selectedProduce(value ? self.produce.slice(0) : []);
            },
            owner: self
        });

    }

    return AppViewModel;
});
