'use strict';

function Router () {
    this.routes = {
        courses: require('./courses/CoursesController')
    };
}

Router.prototype.init = function (request, response, action, route) {
    var controller = this.routes[route];
    
    controller.init(request, response, action);
}

module.exports = new Router();