AOS.init();

$('.navbar-toggler-icon').click(function (e) {
    $('.nav').toggle();
    $('.nav-item').css('display', 'block')
    $('.nav-item').css('background-color', 'white')
    $('.nav-item').css('background-color', 'black')
    $('.nav-item').css('border-buttom', '1px solid black')
    $('.nav-item').css('padding', '0')
    $('.nav-item').css('margin', '0')
});
$(".navbar-toggler-icon").css("float", "right");

$(document).ready(function () {
    $(".BTN_TOP").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
});