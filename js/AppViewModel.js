define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        this.myItems = [ 'A', 'B', 'C' ];
    }

    return AppViewModel;
});
