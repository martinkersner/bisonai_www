/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var about_position = $("#about").offset().top - 20;
    var projects_position = $("#projects").offset().top;

    if (scroll > about_position && scroll < projects_position) {
        $(".navbar").addClass("nav-dark");
        $("#logo").attr("src","img/bisonai-transparent-dark.png");
        $(".navbar-toggle").css({"color": "white"});
    } else {
        $(".navbar").removeClass("nav-dark");
        $("#logo").attr("src","img/bisonai-transparent-light.png");
        $(".navbar-toggle").css({"color": "black"});
    }
});
