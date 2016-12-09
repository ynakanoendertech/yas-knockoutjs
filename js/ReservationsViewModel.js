// Overall viewmodel for this screen, along with initial state
define(['ko', 'SeatReservation'], function(ko, SeatReservation) {
    "use strict";

    return function ReservationsViewModel() {
        // Preserve this
        var self = this;

        // Non-editable catalog data - would come from the server
        self.availableMeals = [
            { mealName: "Standard (sandwitch)", price: 0 },
            { mealName: "Premium (lobstar)", price: 34.95 },
            { mealName: "Ultimate (whole zebra)", price: 290 }
        ];

        // Editable data
        self.seats = ko.observableArray([
            new SeatReservation("Steve", self.availableMeals[0]),
            new SeatReservation("Bert", self.availableMeals[0])
        ]);

        // Operations

        self.addSeat = function() {
            self.seats.push(new SeatReservation("", self.availableMeals[0]));

        };

        self.removeSeat = function(seat) {
            self.seats.remove(seat);
        };

        self.totalSurcharge = ko.computed(function() {
            var total = 0;
            for (var i = 0; i < self.seats().length; i++) {
                total += self.seats()[i].meal().price;
            }
            return total;
        });
    };
});