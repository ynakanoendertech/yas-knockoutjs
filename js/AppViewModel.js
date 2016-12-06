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

        // A computed internally ask to start tracking dependencies and receive a notification when anything observable is accessed
        ko.dependencyDetection.begin({
            callback: function(subscribable, internalId) {
                console.log("original context: " + internalId + " was accessed");
            }
        });
    };
});
