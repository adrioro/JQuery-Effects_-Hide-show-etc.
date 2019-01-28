$("#myButton").click(function () {
    $(".myDiv1").hide("slow");

});
$("textarea").keypress(function (a) {
    var keycode = a.keyCode ? a.keyCode : a.which;

    if (keycode == "13") {
        $(".myDiv2").hide("slow");
    }

});


$("#myButton2").click(function () {
    $(".myDiv3").toggle();

});

$(".myDiv4").click(function () {
    $(".myDiv4").fadeOut(700); //700 millseconds fade out fully.
});

$("#myButton4").click(function () {
    $(".myDiv4").fadeToggle(700); //700 millseconds fade out fully.
});

$("#myButton5").click(function () {
    $(".myDiv5").show();

});