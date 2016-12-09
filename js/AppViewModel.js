define(['ko'], function(ko) {
    "use strict";

    // View model
    var AppViewModel = {
        personName: ko.observable('Bob'),
        personAge: ko.observable(20),
    };

    // Subscribe to value change on personName
    var subscription = AppViewModel.personName.subscribe(function(newValue) {
        console.log("The persons's new name is " + newValue);
    });

    setTimeout(function() {
        console.log('updated');
        AppViewModel.personName('Updated').personAge(30);
        subscription.dispose();  // Terminate a subscription
    }, 3000);
    return AppViewModel;
});
