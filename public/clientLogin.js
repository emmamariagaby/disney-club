//form, login and create
$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

// redirect from create to login
function openSiteCreate(url) {
var win = window.location.replace('/#login');
}

// redirect from login to website
function openSiteLogin(url) {
    var win2 = window.replace('/index1.html');
    }

// Login user
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
        body: JSON.stringify(user),
        credentials: 'include'
        }).then((response) => {

            if(response.status === 401) {
               console.log('Wrong username or password')
            } else { 
                return response.json()
            }

        }).then(
            openSiteLogin()
        )

    console.log(user.username + " is logged in")
}