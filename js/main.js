$(document).ready(function () {

    // --------------------------- Form validate ----------------------------------- //

    var validator = $('#form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                digits: true,
                minlength: 5,
                maxlength: 14
            },
            class: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "To short name"
            },
            phone: {
                required: "Please enter phone number",
                digits: "Please enter correct number",
                minlength: "To short number",
                maxlength: "To long number"
            },
            class: {
                required: "Please choose your class"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });



    // --------------------------- Header navigation ----------------------------------- //

    function scrollTo() {

        var winWidth = $(window).width();
        var headerHeight = 89;

        if (winWidth < 768) {
            headerHeight = 59;
        }

        $('.scroll-down').click(function () {
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) {
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top - headerHeight }, 500);
            }
            return false;
        });
    }
    scrollTo();
});