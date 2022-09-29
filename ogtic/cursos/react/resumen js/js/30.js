// Fetch API - Async Await

const url = 'https://jsonplaceholder.typicode.com/comments'

const consultarAPI = () => {
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado =>
            resultado.forEach(comentario => {
                console.log(comentario)
            })
        )
    
    }

// El async await "detiene" hasta que obtenga un resultado, luego de obtenerlo sigue el codigo.

const _consultarAPI = async () => {
    const respuesta = await fetch(url)
    console.log('Despues de respuesta')
    const resultado = await respuesta.json()
    console.log('Despues de resultado')
    }

_consultarAPI()


