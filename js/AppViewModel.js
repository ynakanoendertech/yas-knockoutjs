define(['ko'], function(ko) {
    "use strict";

    // View model
    return function AppViewModel() {

        // Preserve this
        var self = this;

        // Instance properties
        self.twitterName = ko.observable('@test');
        self.resultData = ko.observable();

        // Instance methods
        self.getTweets = function() {
            var name = self.twitterName(),
                simulatedResults = [
                    { text: name + ' What a nice day.' },
                    { text: name + ' Building some cool apps.' },
                    { text: name + ' Just saw a famous celebrity eating.' }
                ];

            self.resultData({ retrievalDate: new Date(), topTweets: simulatedResults });
        };
        self.clearResults = function() {
            self.resultData(undefined);
        };

    };
});
