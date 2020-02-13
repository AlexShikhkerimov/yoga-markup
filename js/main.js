$(document).ready(function () {
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
});