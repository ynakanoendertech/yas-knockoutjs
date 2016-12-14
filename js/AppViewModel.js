define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.myDivHandler = function() {
            console.log('outer div clicked');
        };

        self.myButtonHandler = function() {
            console.log('inner button clicked');
        };
    }

    return AppViewModel;
});
