fetch("/characters").then((response) => {
    return response.json()
}).then((characters) => {
    allCharacters(characters)
})

function allCharacters(characters) {
    let allCharactersContainer = document.getElementById("getAllCharacters")

    characters.forEach(character => {
        let characterId = document.createElement("p")
        characterId.innerText = "Disney Id : " + character._id
        let characterName = document.createElement("p")
        characterName.innerText = "Disney Character: " + character.name
        let characterMovie = document.createElement("p")
        characterMovie.innerText = "Disney Movie: " + character.movie
        let characterBestFriend = document.createElement("p")
        characterBestFriend.innerText = "Best Friend: " + character.bestFriend

        let characterDiv = document.createElement("div")
        characterDiv.classList.add("all")

        characterDiv.appendChild(characterId)
        characterDiv.appendChild(characterName)
        characterDiv.appendChild(characterMovie)
        characterDiv.appendChild(characterBestFriend)

        allCharactersContainer.appendChild(characterDiv)
    })
}

const form = document.getElementById('create')
form.addEventListener('submit', createNew)

function createNew(event) {
    event.stopPropagation()
    event.preventDefault()

    const formData = new FormData(event.target)
    const character = {}
    for (const pair of formData.entries()) {
        const [key, value] = pair
        character[key] = value
    }

    fetch("/characters", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
    })

    let createContainer = document.getElementById("message")

    let message = document.createElement("h4")
    message.innerText = "En ny Disneyfigur har lagts till"
    createContainer.appendChild(message)

    setTimeout(function () {
        window.location.reload()
    }, 1500)
}


const formUpdate = document.getElementById('updateCharacter')
formUpdate.addEventListener('submit', update)

function update(event) {
    event.stopPropagation()
    event.preventDefault()

    const formData = new FormData(event.target)
    const updatedCharacter = {}
    for (const pair of formData.entries()) {
        const [key, value] = pair
        updatedCharacter[key] = value
    }
    const id = document.getElementById("updateId").value
    const name = document.getElementById("updateName").value
    fetch("/characters/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCharacter)
    })

    let createContainer = document.getElementById("updateMessage")

    let updateMessage = document.createElement("h4")
    message.innerText = name + " har uppdaterats"
    createContainer.appendChild(updateMessage)

    setTimeout(function () {
        window.location.reload()
    }, 1500)

}

const deleteform = document.getElementById('deleteCharacter')
deleteform.addEventListener('submit', deleteCharacter)
function deleteCharacter(event) {
    event.stopPropagation()
    event.preventDefault()

    const formData = new FormData(event.target)
    const deletedCharacter = {}
    for (const pair of formData.entries()) {
        const [key, value] = pair
        deletedCharacter[key] = value
    }
    const id = document.getElementById("deleteId").value
    fetch("/characters/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })

    let deletecontainer = document.getElementById("deleteMessage")

    let deleteMessage = document.createElement("h4")
    message.innerText = id + " har raderats"
    container.appendChild(deleteMessage)

    setTimeout(function () {
        window.location.reload()
    }, 1500)
}

//form, login and create
$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});