define(['ko'], function(ko) {
    "use strict";

    // View model
    return function AppViewModel() {

        // Preserve this
        var self = this;

        // -------------------------------------------------------------------------------
        // Reference: http://www.knockmeout.net/2014/05/knockout-dependency-detection.html
        // -------------------------------------------------------------------------------

        // A few observables to work with
        var test = ko.observable("one"),
            test2 = ko.observable("two"),
            test3 = ko.observable("three");

        console.dir(ko.dependencyDetection);
        // A computed internally ask to start tracking dependencies and receive a notification when anything observable is accessed
        // Add a callback for all observable/computed accesses.
        ko.dependencyDetection.begin({
            callback: function(subscribable, internalId) {
                console.dir(subscribable);
                console.log("original context: " + internalId + " was accessed");
            }
        });

        // Any read to an observable or computed triggers a call to the dependency tracker
        test();
    };
});
