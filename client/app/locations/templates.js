'use strict';

function Templates () {
    this.coursesList = '\
        <div id="container"></div>\
        <img src="../../img/favicon.ico" id="icon-add">\
    ',
    //<i class="fa fa-plus-square" id="icon-add"></i>\
    this.cityInfo = '\
        <p class = "city-name"><%=city%></p>\
        <p>Groups - <%=groups%></p>\
        <p>Teachers - <%=teachers%></p>\
    ',

    this.cotextMenu = '\
        <div class = "city-menu">\
            <ul>\
                <li id = "edit">Edit <%=city%></li>\
                <li id = "delete">Delete</li>\
            </ul>\
        </div>\
    ',

    this.courseForm = '\
        <div class="modal">\
            <h2 id = "form-title"><%= city ? "Update" : "Create" %>\
                city <%=city%>\
                <i class="fa fa-times" id = "close-modal"></i>\
            </h2>\
            <div id="add-new">\
                <label>Name:</label>\
                <input type = "text" name = "city" placeholder = "Enter the name of the city..." value = "<%=city%>"><br>\
                <label>Groups:</label>\
                <input type = "text" name = "groups" placeholder = "Enter the groups..." value = "<%=groups%>"><br>\
                <label>Teachers:</label>\
                <input type = "text" name = "teachers" placeholder = "Enter the teachers..." value = "<%=teachers%>"><br>\
            </div>\
            <div class = "footer">\
                <input type="button" id="save" value="Save">\
            </div>\
        </div>\
    '
}