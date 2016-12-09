define(['ko'], function(ko) {
    "use strict";

    // View model
    var AppViewModel = {
        personName: ko.observable('Bob'),
        personAge: ko.observable(123)
    };

    setTimeout(function() {
        console.log('updated');
        AppViewModel.personName('Updated');
    }, 3000);
    return AppViewModel;
});
