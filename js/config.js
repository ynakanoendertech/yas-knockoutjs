"use strict";

requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'node_modules/jquery/dist/jquery',
        'jquery-color': 'node_modules/jquery-color/jquery.color',
        ko: 'node_modules/knockout/build/output/knockout-latest',
        AppViewModel: "js/AppViewModel"
    },
    shim: {
        'jquery-color' : {
            deps: ['jquery'],
            exports: 'jQueryColor'
        }
    }
});
