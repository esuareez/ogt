// Generar codigo HTML desde JS

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


    const alertaPrevia = document.querySelector('.alerta')
    if(alertaPrevia){
        alertaPrevia.remove()
    }
    // CREAR ELEMENTO **********
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta') // agregar clase
    console.log(alerta)


    if(nombre === "" || password === ""){
        alerta.textContent = "Todos los campos son obligatorios"
        alerta.classList.add('error')
        formulario.appendChild(alerta) // Colocar como hijo la alerta
        return
    } 

    
    console.log("Enviaste el formulario.")
    console.log(`Nombre del usuario ${nombre}. Contraseña del usuario ${password}`)
    console.log(alerta)
})