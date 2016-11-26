"use strict";

require(['jquery', 'ko',], function($, ko) {

    $(document).ready(function() {

        // View model
        function AppViewModel() {
            this.firstName = ko.observable("Bert");
            this.lastName = ko.observable("Bertington");
        }

        // Activate
        ko.applyBindings(new AppViewModel());
    });

});