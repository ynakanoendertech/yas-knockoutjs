define(['ko'], function(ko) {
    "use strict";

    // External observable
    var someExternalObservable = ko.observable(123);

    // View model
    function AppViewModel(params) {

        // Preserve this
        var self = this;

        self.myComputed = ko.computed(function() {
            return someExternalObservable() + 1;
        });

        self.myPureComputed = ko.pureComputed(function() {
            return someExternalObservable() + 2;
        });

        self.mySubscription = someExternalObservable.subscribe(function(val) {
            console.log('The external observable changed to ' + val);
        });

        self.myIntervalHandle = window.setInterval(function() {
            console.log('Another second passed, and the component is still alive.');
        }, 1000);
    }

    AppViewModel.prototype.dispose = function() {
        // Preserve this
        var self = this;

        self.myComputed.dispose();
        self.mySubscription.dispose();
        window.myIntervalHandle(self.myIntervalHandle);
    };

    return AppViewModel;
});
