'use strict';

var CourseView = Backbone.View.extend({
	tagName: 'div',
	className: 'info-container',

    events: {
    	'contextmenu': 'callMenu'
    },

    render: function () {
        this.model.on('destroy', this.deleteCourse, this);
        this.model.on('change', this.rerender, this);
        this.$el.html(this.generateCourseHTML());

        return this;
    },

    deleteCourse: function () {
        this.$el.empty();
        this.remove();
    },

    rerender: function () {
        this.deleteCourse();
        this.render();
    },

    callMenu: function (e) {
        mediator.publish('callMenu', this.model, e);

        return false;
    },

    generateCourseHTML: function () {
        var propsHTML,
            template;
        
        template = _.template(templates.cityInfo);
        propsHTML = template(this.model.toJSON());

        return propsHTML;
    }

});