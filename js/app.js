"use strict";

require(['jquery', 'ko', 'AppViewModel'], function($, ko, AppViewModel) {

    $(document).ready(function() {

        ko.components.register('your-component-name', {
            viewModel: AppViewModel,
            template: 'some template'
        });

        // Activate
        //ko.applyBindings(new AppViewModel());
        ko.applyBindings();
    });
});