
/* Ejercicio 1 
*
* En este ejercicio se debe solicitar al usuario que introduzca su nombre y su edad y luego presentar su nombre y edad.
*/ 
document.querySelector("#ex-1").addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    const desc = /*html*/`
        <header>
            <h1 class="title">Ejercicio 1</h1>
        </header>
        <p class="description">Solicita un nombre, edad y luego muestra un mensaje saludando a la persona ingresada.</p> `;
    
    document.getElementById("description").innerHTML = desc;
        
    const ex = /*html*/`
        <form id="form">
            <div class="divisor">
                <label class="label" for="name">Nombre</label>
                <input type="text" id="name" class="text">
            </div>
            <div class="divisor">
                <label for="years" class="label">Edad</label>
                <input type="number" id="years" min="1" max="150">
            </div>
            <div class="divisor">
                <button class="submit" type="submit">Enviar datos</button>
            </div>
        </form> `;

    document.getElementById("ex-active").innerHTML = ex;
    document.querySelector("#form").addEventListener("submit",function(e){
        e.preventDefault();
        e.stopPropagation();
        let nombre = document.getElementById("name").value.trim();
        let edad = document.getElementById("years").value.trim();

        if(nombre === "" || edad === ""){
            alert("Campos obligatorios");
            return;
        }
        
        document.getElementById("name").value = "";
        document.getElementById("years").value = "";
    
        const ex = /*html*/`
        <div class="divisor">
            <div class="divisor">
                <p class="description">Tu nombre es ${nombre} y tienes ${edad} a&ntilde;os de edad. </p>
            </div>
        </div> `;
        document.getElementById("result").innerHTML = ex;
    });
});

/* Ejercicio 2
*
* Darle la opcion al usuario de elegir la figura que desee sacarle el area, posterior a esto solicitar los 
* valores necesarios para realizar el calculo.
*/

document.querySelector("#ex-2").addEventListener("click", e => {

    document.getElementById("description").innerHTML = /*html*/`
        <header>
            <h1 class="title">Ejercicio 2</h1>
        </header>
      <p class="description">Elige una figura y saca su &aacute;rea.</p> `;

    const ex = /*html*/`
        <div class="areas">
            <button class="btn">C&iacute;rculo</button>
            <button class="btn">Cuadrado</button>
            <button class="btn">Rect&aacute;ngulo</button>
        </div>
    `;
    document.getElementById("ex-active").innerHTML = ex;
});

