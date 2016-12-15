define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.wantsSpam = ko.observable(true);
        self.spamFlavors = ko.observableArray(['cherry', 'almond']);

        setTimeout(function() {
            console.log('change values');
            self.spamFlavors.push('msg');
        }, 3000);
    }

    return AppViewModel;
});
