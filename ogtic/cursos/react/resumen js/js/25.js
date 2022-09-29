// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')

inputNombre.addEventListener('input', (e) => {
    console.log(e.target.value)
})

