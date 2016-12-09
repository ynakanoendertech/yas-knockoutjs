define(['ko'], function(ko) {
    "use strict";

    // View model
    var AppViewModel = {
        personName: ko.observable('Bob'),
        personAge: ko.observable(20),
    };

    setTimeout(function() {
        console.log('updated');
        AppViewModel.personName('Updated').personAge(30);
    }, 3000);
    return AppViewModel;
});
