$(document).ready(function () {

    // --------------------------- Form validate ----------------------------------- //

    $('#form').validate({
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
        var headerHeight = 99;

        if (winWidth < 768) {
            headerHeight = 79;
        }

        $('.scroll-down').click(function () {
            var scroll_el = $(this).attr('href');
            setActiveLi($(this));
            if ($(scroll_el).length != 0) {
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top - headerHeight }, 500);
            }
            return false;
        });
    }

    function setActiveLi($el) {
        if (!$el.hasClass('active')) {
            $el.parents('.header').find('li.active').removeClass('active');
            $el.parent('li').addClass('active');
        }
    }

    scrollTo();

    // --------------------------- Header scroll -------------------------------- //


    function headerScroll() {
        $(window).scroll(function () {
            let desktopWidth = $(window).width() > 767;

            if ($(document).scrollTop() > 100) {
                if (desktopWidth) $('.header').addClass('header__scroll');
            } else {
                if (desktopWidth) $('.header').removeClass('header__scroll');
            }
        });
    }
    setTimeout(headerScroll(), 100);


    // ------------------------------- Shop hover ---------------------------------------//

    function offerHover() {
        $offerBtn = $('.offer-btn')
        $offerBtn.hover(function () {
            $(this).parents('.offer-item').addClass('hoverClass');
        });
        $offerBtn.mouseout(function () {
            $(this).parents('.offer-item').removeClass('hoverClass');
        });
    }
    offerHover();
});