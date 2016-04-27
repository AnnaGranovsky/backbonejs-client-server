'use strict';

var CourseFormView = Backbone.View.extend({
    tagName: 'div',
    className: 'add-city',
    mode: '',

    events: {
        'click #close-modal': 'cancel',
        'click #save': 'save',
        'keydown': 'setAcitonMode'
    },

    initialize: function () {
        if (!this.model) {
            this.mode = 'add';
            this.model = new Course();
        }
    },

    render: function () {
        this.$el.html(this.generateFormHTML());
        this.$el.fadeIn('slow');

        return this;
    },

    generateFormHTML: function () {
        var propsHTML,
            template;
        
        template = _.template(templates.courseForm);
        propsHTML = template(this.model.toJSON());

        return propsHTML;
    },

    save: function () {
        var data = this.getNewData();

        if (this.mode === 'add') {
            mediator.publish('saveAddedCity', this.model);
        } 
        this.model.save(data);
        this.closeForm();
    },

    cancel: function () {
        if (this.mode === 'add') {
            this.model.destroy();
        }
        this.closeForm();
    },

    setAcitonMode: function () {
        if ( event.which === 13 ) {
                this.save();
        } else if (event.which === 27) {
            this.cancel();
        }
    },

    getNewData: function () {
        var inputs = this.$('input[type="text"]'),
            newData = {};

        inputs.each(function () {
            newData[$(this).attr('name')] = $(this).val();
        });
        
        return newData;
    },

    closeForm: function () {
        this.$el.fadeOut('slow', function () {
            this.$el.empty();
            this.remove();
        }.bind(this));
    }
});

