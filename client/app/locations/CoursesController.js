'use strict';

var CoursesController = (function () {
    var coursesView = new CoursesListView(),
        courses = new CoursesList(),
        $mainContainer,
        $modal,
        menu;

    function CoursesController () {
        init();
        initSubscriptions();
    }

    function init () {
        $modal = $('#modal-container');
        $mainContainer = $('#main');

        $mainContainer.html(coursesView.render().el);
    }

    function initSubscriptions () {
        mediator.subscribe('callMenu', showMenu)
            .subscribe('callForm', showForm)
            .subscribe('saveAddedCity', addCourse);
    }

    function showMenu (course, e) {
        var courseMenu = new MenuView({model: course});

        if (menu) {
            menu.remove();
        }

        menu = courseMenu.render(e).el;
        $mainContainer.append(menu);
    }

    function showForm (course) {
        var courseForm = new CourseFormView({model: course});

        $modal.append(courseForm.render().el);
    }

    function addCourse (course) {
        coursesView.addCourse(course);
    }
    
    return CoursesController;
})();