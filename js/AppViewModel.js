define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.countries = ['Japan', 'Bolivia', 'New Zealand'];
        self.selectedCountry = ko.observable('Latvia');

        // Subscribe function to output value changes
        self.selectedCountry.subscribe(function(value) {
            console.log(value);
        });
    }

    return AppViewModel;
});
