define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.selectedCountry = ko.observable();
        self.availableCountries = ko.observableArray([
            { countryName: 'France' },
            { countryName: 'Germany' },
            { countryName: 'Spain' }
        ]);
    }

    return AppViewModel;
});
