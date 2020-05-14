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

const form = document.getElementById('login-form')
form.addEventListener('submit', loginUser)

function loginUser(event) {
    event.stopPropagation()
    event.preventDefault()

    const formData = new FormData(event.target)
    const user = {
        username: "",
        password: ""
    }
    for (const pair of formData.entries()) {
        const [key, value] = pair
        user[key] = value
    }

    fetch("/users/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
       
    })

    console.log(user.username + " is logged in")
}