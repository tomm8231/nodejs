function randomInFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
}

const randomPokemonId = randomInFromInterval(1, 151)


function escapeHTML(string) {
    if (!string) return "";

    return string.replaceAll(`&`, "&amp;")
        .replaceAll(`>`, "&gt;")
        .replaceAll(`<`, "&lt;")
        .replaceAll(`"`, "&quot;")
        .replaceAll(`/`, "&#039;");
}

// https://pokeapi.co/api/v2/pokemon/1

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
.then(((response) => {
    if (!response.ok) {
        throw new Error("Could not find pokemon")
    }
    return response.json()
}))
.then((result) => {
    const nameHeader = document.getElementById(`pokemon-name`) 
    nameHeader.innerText = result.name.charAt(0).toUpperCase() + result.name.slice(1).toLowerCase()

    const imageWrapperDiv = document.getElementById("image-wrapper")
    imageWrapperDiv.innerHTML = `<img id="pokemon-image" src="${result.sprites.other.home.front_default}"/>`
})


