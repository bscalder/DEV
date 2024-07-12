async function imagenRandom() {
    const resultado = await fetch("https://api.nekosapi.com/v3/images/random?rating=safe&limit=1");
    const resultadoConv = await resultado.json();
    return resultadoConv;
}

export const conexionApi = {
    imagenRandom
}