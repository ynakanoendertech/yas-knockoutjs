"use strict";

require(['jquery', 'ko',], function($, ko) {

    $(document).ready(function() {

        // View model
        function AppViewModel() {
            this.firstName = "Bert";
            this.lastName = "Bertington";
        }

        // Activate
        ko.applyBindings(new AppViewModel());
    });

});