define(['ko'], function(ko) {
    "use strict";

    // View model
    function AppViewModel() {

        // Preserve this
        var self = this;

        this.people = ko.observableArray([
            { name: 'Bert' },
            { name: 'Charles' },
            { name: 'Denise' }
        ]);

        this.addPerson = function() {
            self.people.push({ name: "New at " + new Date() });
        };

        this.removePerson = function() {
            self.people.remove(this);
        };
    }

    return AppViewModel;
});
