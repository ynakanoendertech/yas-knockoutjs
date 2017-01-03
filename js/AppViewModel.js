define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {
        var self = this;

        self.persons = ko.observableArray([
            { name: 'Bob', score: 10 },
            { name: 'Kat', score: 20 }
        ]);

        self.renderedH2Tags = ko.observableArray([]);
        self.myPostProcessingLogic = function(elements) {
            var h2text = elements[1].innerHTML;
            self.renderedH2Tags.push( h2text );
        };
    }

    return AppViewModel;
});
