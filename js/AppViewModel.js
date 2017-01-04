define(['ko'], function(ko) {
    "use strict";

    // Custom binding
    ko.bindingHandlers.slideVisible = {
        update: function(element, valueAccessor, allBindings) {

            // First get the latest data that we're bound to
            var value = valueAccessor();

            // Next, whether or not the supplied model property is observable, get its current value
            var valueUnwrapped = ko.unwrap(value);

            // Grab some more data from another binding property
            var duration = allBindings.get('slideDuration') || 400;  // 400ms is default duration unless otherwise specified

            // Now manipulate the DOM element
            if (valueUnwrapped == true) {
                $(element).slideDown(duration);  // Make the element visible
            } else {
                $(element).slideUp(duration);  // Make the element invisible
            }
        }
    };

    ko.bindingHandlers.fadeVisible = {
        update: function(element, valueAccessor, allBindings) {
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            var duration = allBindings.get('fadeDuration') || 400;
            if (valueUnwrapped == true) {
                $(element).fadeIn(duration);
            } else {
                $(element).fadeOut(duration);
            }
        }
    };

    // View model
    function AppViewModel() {
        var self = this;

        self.giftWrap = ko.observable(true);
        self.giftCard = ko.observable(true);
    }

    return AppViewModel;
});
