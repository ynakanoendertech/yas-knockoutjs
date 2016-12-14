define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.planets = [
            { name: 'Mercury', capital: null },
            { name: 'Earth', capital: { cityName: 'Barnsley' } }
        ];

    }

    return AppViewModel;
});
