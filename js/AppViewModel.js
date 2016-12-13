define(['ko'], function(ko) {
    "use strict";

    // View model
    var AppViewModel = {
        myMessage: ko.observable("<i>Hello</i>"),
        myHtml: ko.observable("<i>Hello</i>")
    };

    return AppViewModel;
});
