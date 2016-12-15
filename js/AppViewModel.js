define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.buyer = { name: 'Franklin', credits: 250 };
        self.seller = { name: 'Mario', credits: 5800 };
    }

    return AppViewModel;
});
