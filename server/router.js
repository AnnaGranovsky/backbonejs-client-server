'use strict';

var helper = require('./libs/helper'),
    _ = require('underscore'),
    dir = './app/';

function Router () {}

_.extend(Router.prototype, {
    routes: {
        index: {module: 'index'},
        courses: {module: 'courses'}
    },

    init: function (request, response, action, route) {
        this.navigate(route, request, response, action);
    },

    navigate: function (route, request, response, action) {
        var controller;

        controller = require(dir + this.routes[route]['module'] + '/Controller');
        controller.initialize(request, response, action);
    }  
});

module.exports = new Router();