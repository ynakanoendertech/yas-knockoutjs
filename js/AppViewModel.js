define(['ko'], function(ko) {
    "use strict";

    // View model
    var AppViewModel = {
        price: ko.observable(24.95)
    };
    AppViewModel.priceRating = ko.pureComputed(function() {
        return this.price > 50 ? "expensive" : "affordable";
    }, AppViewModel);

    return AppViewModel;
});
