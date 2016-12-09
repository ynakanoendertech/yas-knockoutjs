// Class to represent a row in the seat reservations grid
define(['ko'], function(ko) {
    "use strict";

    return function SeatReservation(name, initialMeal) {
        // Preserve this
        var self = this;

        self.name = name;
        self.meal = ko.observable(initialMeal);

        self.formattedPrice = ko.computed(function() {
            var price = self.meal().price;
            return price ? "$" + price.toFixed(2) : "None";
        });
    };
});