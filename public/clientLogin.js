//Toggle form, login and create
$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
})

// Register user
const form = document.getElementById('register-form')
form.addEventListener('submit', registerUser)

function registerUser(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const user = {}
    for (const pair of formData.entries()) {
        const [key, value] = pair
        user[key] = value
    }

    fetch("/users/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        }).then((response) => {

            if(response.status === 400) {
               console.log("user already exists")
            } 

        })
        
}

// Login user
const form1 = document.getElementById('login-form')
form1.addEventListener('submit', loginUser)

function loginUser(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const user = {
        user: "",
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
               
            } else { 
                let createContainer = document.getElementById("user-login")
                let message = document.createElement("h2")
                message.innerText = user.user + " is logged in"
                createContainer.appendChild(message)
                return response.json()
            }

        })
        
}