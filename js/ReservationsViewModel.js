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
    };
});