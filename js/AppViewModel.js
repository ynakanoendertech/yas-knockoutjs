define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        self.myFunction = function(data, event) {
            if (event.shiftKey) {
                console.log('Shift key pressed');
            } else {
                console.log('normal click');
            }
        };
    }

    return AppViewModel;
});
