const extinctDinosaurs = ["Dino1", "Dino2", "Dino3", "Dino4", "Dino5"]

function getExtinctDinosaurs() {
    return extinctDinosaurs
}

function addExtinctDinosaur(extinctDinosaur) {
    extinctDinosaurs.push(extinctDinosaur)
}

export {
    getExtinctDinosaurs,
    addExtinctDinosaur
}