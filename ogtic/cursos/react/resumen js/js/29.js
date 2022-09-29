// Fetch API

const url = 'https://jsonplaceholder.typicode.com/comments'


// Promises. Valor que va a estar disponible ahora o en el futuro.
const consultarAPI = () => {
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado =>
            resultado.forEach(comentario => {
                console.log(comentario)
            })
        )
    
    }

consultarAPI()


