'use strict';

var CoursesList = Backbone.Collection.extend({
	model: Course,
    url: '/courses'
});