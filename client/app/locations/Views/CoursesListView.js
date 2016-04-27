'use strict';

var CoursesListView = Backbone.View.extend({
	tagName: 'div',
	className: 'list',
	$container: '',

	events: {
		'click #icon-add': 'callAddForm',
	},

	initialize: function () {
		this.collection = new CoursesList();
		this.collection.on('add change', this.renderOneCourse, this);
		this.collection.fetch();
		this.collection.on('change destroy', function () {
			console.log(this.collection)
		}, this)
	},
	
	render: function () {
		this.$el.append(templates.coursesList);
		this.$container = this.$('#container');
		
		return this;
	},

	renderOneCourse: function (course) {
		var cityView = new CourseView({model: course}),
        	$cityElem;

        $cityElem = cityView.render().el;
        this.$container.append($cityElem);
    },

    callAddForm: function () {
    	mediator.publish('callForm');
    },

    addCourse: function (course) {
    	this.collection.add(course);
    }
});