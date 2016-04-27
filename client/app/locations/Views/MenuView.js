'use strict';

var MenuView = Backbone.View.extend({
	tagName: 'div',
	id: 'menu',

	events: {
    	'click #edit': 'editCourse',
    	'click #delete': 'deleteCourse',
    },

    render: function (e) {
        this.setPosition(e);
        this.$el.html(this.generateMenuHTML());
        $('body').click(this.closeMenu.bind(this));

        return this;
    },

	generateMenuHTML: function () {
		var propsHTML,
            template;
        
        template = _.template(templates.cotextMenu);
        propsHTML = template(this.model.toJSON());

        return propsHTML;
    },

    setPosition: function (e) {
	    this.$el.css({
	        'top': (e.pageY + 'px'),
	        'left': (e.pageX + 'px')
	    });
    },

    closeMenu: function () {
    	this.$el.empty();
        this.remove();
    },

    editCourse: function () {
        this.closeMenu();
    	mediator.publish('callForm', this.model);
    },

    deleteCourse: function () {
        this.closeMenu();
    	this.model.destroy();
        console.log(this.model.get('id'))
    }
});