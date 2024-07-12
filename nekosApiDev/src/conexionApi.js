async function imagenRandom() {
    const response = await fetch("https://api.nekosapi.com/v3/images/random?rating=safe&limit=1", {
        method: "GET",
    })
    const data = await response.json();    
}

export const conexionApi = {
    imagenRandom
}