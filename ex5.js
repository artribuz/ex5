//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

    console.log('ready');

    $(function () {
        $("#tabs").tabs({
            collapsible: true 
        });
    });
    $(function () {
        $(".chosen").chosen();
    });
});