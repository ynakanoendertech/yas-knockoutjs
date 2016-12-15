define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.availableCountries = ko.observableArray(['France', 'Germany', 'Spain']);
        self.chosenCountries = ko.observableArray(['Germany']);

        setTimeout(function() {
            console.log('choose one more item');
            self.chosenCountries.push('France');
        }, 3000);
    }

    return AppViewModel;
});
