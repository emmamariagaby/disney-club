//form, login and create
$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

// redirect from create to login
function openSite(url) {
var win = window.open('/#login');
}