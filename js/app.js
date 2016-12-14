"use strict";

require(['jquery', 'ko', 'AppViewModel'], function($, ko, AppViewModel) {

    $(document).ready(function() {

        ko.components.register('message-editor', {
            viewModel: AppViewModel,
            template: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
        });

        // Activate
        //ko.applyBindings(new AppViewModel());
        ko.applyBindings();
    });
});