define(['ko'], function(ko) {
    "use strict";

    // Custom bindings

    ko.bindingHandlers.allowBindings = {
        init: function(element, valueAccessor) {
            // Let bindings proceed as normal *only if* my value is false
            var shouldAllowBindings = ko.unwrap(valueAccessor());
            return {
                controlsDescendantBindings: !shouldAllowBindings
            };
        }
    };

    ko.bindingHandlers.withProperties = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // Make a modified binding context, with an extra properties, and apply it to descendant elements
            var innerBindingContext = bindingContext.extend(valueAccessor);
            ko.applyBindingsToDescendants(innerBindingContext, element);

            // Also tell KO *not* to bind the descendants itself, otherwise they will be bound twice
            return {
                controlsDescendantBindings: true
            };
        }
    };

    // View model
    function AppViewModel() {
        var self = this;

    }

    return AppViewModel;
});
