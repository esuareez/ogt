// Selectores del DOM

const heading = document.querySelector('h2')

console.log(heading)

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach( enlace => {
    enlace.textContent === 'Enlace 3' ? enlace.textContent = 'Enlace 43' : enlace.textContent = 'Enlace 0'
})