$(function () {
    $('.modal-open').click(function (e) {
        e.preventDefault();
        $('.privacy').show();
        return false;
    });
});

$(function () {
    $('.modal-close').click(function () {
        $('.privacy').hide();
    });
});


$(function () {
    const $submitBtn = $('.contact-btn')
    $('.contact-form input, .contact-form textarea').on('change', function () {
        if (
            $('.contact-form input[type="text"]').val() !== "" &&
            $('.contact-form input[type="email"]').val() !== "" &&
            $('.contact-form input[type="number"]').val() !== "" &&
            $('.contact-form input[type="checkbox"]').val() !== "" &&
            $('.contact-form .contact-checkbox').prop('checked') === true
        ) {
            $submitBtn.prop('disabled', false);

        } else {
            $submitBtn.prop('disabled', true);
        }
    });
});