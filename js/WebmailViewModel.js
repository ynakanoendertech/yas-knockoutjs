define(['ko'], function(ko) {
    "use strict";

    // View model
    return function WebmailViewModel() {
        // Preserve this
        var self = this;

        self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    };
});