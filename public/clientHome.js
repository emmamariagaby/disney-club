fetch("/characters").then((response) => {
    return response.json()
}).then((characters) => {
    allCharacters(characters)
})

function allCharacters(characters) {
    let allCharactersContainer = document.getElementById("getAllCharacters")

    characters.forEach(character => {
        let characterHeadline = document.createElement("h4")
        characterHeadline.innerText = character.name + " in " + character.movie
        let characterName = document.createElement("p")
        characterName.innerText = "Disney Character: " + character.name
        let characterMovie = document.createElement("p")
        characterMovie.innerText = "Disney Movie: " + character.movie
        let characterBestFriend = document.createElement("p")
        characterBestFriend.innerText = "Best Friend: " + character.bestFriend
        let characterId = document.createElement("p")
        characterId.innerText = "Disney Id : " + character._id

        let characterDiv = document.createElement("div")
        characterDiv.classList.add("all")

        characterDiv.appendChild(characterHeadline)
        characterDiv.appendChild(characterName)
        characterDiv.appendChild(characterMovie)
        characterDiv.appendChild(characterBestFriend)
        characterDiv.appendChild(characterId)

        allCharactersContainer.appendChild(characterDiv)
    })
}



