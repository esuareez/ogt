tecnologias = ['JS','HTML','CSS']


// Cuando hay un solo parametro, se puede elminar el parentesis
const nuevoArray1 = tecnologias.map(tech => {
    if(tech === 'HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})

const nuevoArray = tecnologias.filter(tech => {
    return tech !== 'HTML'
})

console.log(nuevoArray)