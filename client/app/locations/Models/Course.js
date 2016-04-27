'use strict';

var Course = Backbone.Model.extend({
	urlRoot: '/courses',
	defaults: {
		city: '',
		teachers: '',
		groups: ''
	},
});