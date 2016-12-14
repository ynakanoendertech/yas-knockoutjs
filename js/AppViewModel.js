define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        this.people = [
            { firstName: 'Bert', lastName: 'Bertington' },
            { firstName: 'Charles', lastName: 'Charlesforth' },
            { firstName: 'Denise', lastName: 'Dentiste' }
        ];
    }

    return AppViewModel;
});
