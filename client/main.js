'use strict';

var mediator = new Mediator();
var templates = new Templates();

$(renderCourses);

function renderCourses () {
    new CoursesController();
}


