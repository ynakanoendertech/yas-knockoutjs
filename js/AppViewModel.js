define(['ko'], function(ko) {
    "use strict";

    // Custom binding
    ko.bindingHandlers.slideVisible = {
        init: function(element, valueAccessor) {
            var value = ko.unwrap(valueAccessor());
            $(element).toggle(value);
        },
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
        init: function(element, valueAccessor) {
            var value = ko.unwrap(valueAccessor());
            $(element).toggle(value);
        },
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

    ko.bindingHandlers.hasFocus = {
        init: function(element, valueAccessor) {

            // Register focus event handler at init callback
            $(element).focus(function() {
                var value = valueAccessor();
                value(true);
            });

            // Register blur event handler at init callback
            $(element).blur(function() {
                var value = valueAccessor();
                value(false);
            });
        },
        update: function(element, valueAccessor) {
            var value = valueAccessor();
            if (ko.unwrap(value)) {
                element.focus();
            } else {
                element.blur();
            }
        }
    };

    // View model
    function AppViewModel() {
        var self = this;

        self.giftWrap = ko.observable(false);
        self.giftCard = ko.observable(false);
        self.editingName = ko.observable(false);
    }

    return AppViewModel;
});
