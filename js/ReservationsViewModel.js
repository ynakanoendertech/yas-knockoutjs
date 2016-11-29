// Overall viewmodel for this screen, along with initial state
define(['ko', 'SeatReservation'], function(ko, SeatReservation) {
    "use strict";

    var Country = function(name, population) {
        this.countryName = name;
        this.countryPopulation = population;
    };

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

        // Test data

        self.cats = ko.observableArray([
            "Abby",
            "Bling",
            "Candy"
        ]);

        self.dogs = [
            { dogName: "Dilla", dogAge: 1 },
            { dogName: "Epoc", dogAge: 2 },
            { dogName: "Flips", dogAge: 3 }
        ];
        self.selectedDogAge = ko.observable();

        self.availableCountries = ko.observableArray([
            new Country("UK", 65000000),
            new Country("USA", 320000000),
            new Country("Sweden", 29000000)
        ]);
        self.selectedCountry = ko.observable();
    };
});