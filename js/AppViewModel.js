define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.people = [
            { name: 'Franklin', credits: 250 },
            { name: 'Mario', credits: 5800 }
        ];
    }

    return AppViewModel;
});
