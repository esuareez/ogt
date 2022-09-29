// Operaciones con arreglos

tecnologias = ['JS','HTML','CSS']

// Agregar
// En React no se usa push, ni unshift
const nuevoArreglo = [...tecnologias, 'GraphQL']

// Editar
// De las funciones que mas se usan para editar se usa filter.

const nuevoArray = tecnologias.filter(function(tech) {
    return tech !== 'HTML'
})

// Reemplazar del array

// Para reemplazar se usa map con un function y dentro de ese function se pueden agregar condicionales y poder cambiar todo.

const nuevoArray1 = tecnologias.map(function(tech) {
    if(tech === 'HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray1)