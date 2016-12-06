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
        // Add a callback for all observable/computed accesses in ORIGINAL context
        ko.dependencyDetection.begin({
            callback: function(subscribable, internalId) {
                console.dir(subscribable);
                console.log("ORIGINAL context: " + internalId + " was accessed");
            }
        });

        // Any read to an observable or computed triggers a call to the dependency tracker
        // - The callback will be provided from ORIGINAL context
        test();
        // Output:
        //   original context: 1 was accessed

            console.log('-------------------');
            // Start another dependency detection inside of the current one
            // Add a callback for all observable/computed accesses in CHILD context
            ko.dependencyDetection.begin({
                callback: function(subscribable, internalId) {
                    console.dir(subscribable);
                    console.log("    CHILD context: " + internalId + " was accessed");
                }
            });

            // Inside of child context, access test and also test 2
            // - The callback will be provided from CHILD context
            test();
            test2();
            // Output:
            //   child context: 1 was accessed
            //   child context: 2 was accessed

            // End child context
            ko.dependencyDetection.end();
            console.log('-------------------');


        // Dependencies are back to the original (outer) context
        // - The callback will be provided from ORIGINAL context
        test3();
        // Output:
        //   original context: 3 was accessed

        // End original context
        ko.dependencyDetection.end();
    };
});
