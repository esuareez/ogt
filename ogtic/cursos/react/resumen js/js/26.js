// Eventos del DOM

const password = document.querySelector('#password')
password.addEventListener('input', (e) => {
    console.log(e.target.value) // imprime en tiempo real lo que voy escribiendo.
    password.type = 'text'
    setTimeout( () => {
        password.type = 'password'
    }, 100)
})

const formulario = document.querySelector("#formulario")

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = (document.querySelector("#nombre").value).trim()
    let password = (document.querySelector("#password").value).trim()

    if(nombre === "" || password === ""){
        alert("Los campos son obligatorios")
        return
    } 

    console.log("Enviaste el formulario.")
    console.log(`Nombre del usuario ${nombre}. Contraseña del usuario ${password}`)
})