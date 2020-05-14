//form, login and create
$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

// redirect from create to login
function openSiteCreate(url) {
var win = window.open('/#login');
}

// redirect from login to website
function openSiteLogin(url) {
    var win2 = window.open('/index1.html');
    }