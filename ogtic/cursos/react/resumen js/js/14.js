// Funciones - Arrow Function

const sumar = (a = 0,b = 0) => {
    console.log(a+b)
}

const sumarB = (a = 0,b = 0) => console.log(a+b)

const sumarC = a => console.log(a+10)

sumar(10,15)
sumarB(15,50)
sumarC(90)

// Se usan cuando tienes metodos para los arreglos