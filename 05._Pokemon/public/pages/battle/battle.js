fetch("/battlepokemon")
.then((response) => response.json())
.then((result) => {
    console.log(result); 

        const nameHeader = document.getElementById(`pokemon-name`)
        nameHeader.innerText = `${result.data.name.charAt(0).toUpperCase() + result.data.name.slice(1).toLowerCase()}`


        const strengthHeader = document.getElementById(`pokemon-strength`)
        strengthHeader.innerText = `Strength: ${result.data.strength}`

        const imageWrapperDiv = document.getElementById("pokemon-image")
        imageWrapperDiv.innerHTML = `<img src="${result.data.url}"/>`
    })