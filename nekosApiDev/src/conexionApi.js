async function imagenRandom() {
        const response = await fetch("https://api.nekosapi.com/v3/images/random?rating=safe&limit=15");
        const data = await response.json();
        return data;
}

export const conexionAPI = {
    imagenRandom,
}