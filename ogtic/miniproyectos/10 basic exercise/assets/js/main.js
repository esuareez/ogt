
/* Ejercicio 1 
*
* En este ejercicio se debe solicitar al usuario que introduzca su nombre y su edad y luego presentar su nombre y edad.
*/ 
document.querySelector("#ex-1").addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    // Limpiar los resultados.
    document.getElementById("result").innerHTML = /*html*/`
        <p></p>
    `;

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
    document.getElementById("result").innerHTML = /*html*/`
        <p></p>
    `;

    document.getElementById("description").innerHTML = /*html*/`
        <header>
            <h1 class="title">Ejercicio 2</h1>
        </header>
      <p class="description">Elige una figura y saca su &aacute;rea.</p> `;

    document.getElementById("ex-active").innerHTML = exercise2();

    /* Área del círculo */

    document.querySelector("#circle").addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        const circle = /*html*/`
            <form id="form">
                <div class="divisor">
                    <label for="diametro" class="label">Di&aacute;metro</label>
                    <input type="number" name="diametro" id="diametro">
                </div>
                <div class="divisor">
                    <button type="submit">Calcular</button>
                </div>
            </form>
        `;
        document.getElementById("ex-active").innerHTML = circle;

        /* Se hacen los calculos del area del circulo y se muestran en pantalla. */

        document.querySelector("#form").addEventListener("submit", e => {
            e.preventDefault();
            e.stopPropagation();
            
            const pi = 3.1416;
            let diametro = document.getElementById("diametro").value;

            if(diametro == ""){
                alert("Favor completar los datos requeridos.");
                return;
            }

            let area = pi * ((Math.pow(diametro,2))/4);
            const result = /*html*/`
                <div class="divisor">
                    <p class="description">El &aacute;rea del circulo es ${area} cm<sup>2</sup>.</p>
                </div>
            `;
            document.getElementById("diametro").value = "";
            document.getElementById("result").innerHTML = result;
            document.querySelector(".change").addEventListener("click",e => {
                e.preventDefault();
                e.stopPropagation();
                excercise(exercise2());
                document.getElementById("result").innerHTML = /*html*/`
                    <p></p>
                `;
            });
        });
    });

    /* Área del Cuadrado */

    document.querySelector("#square").addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
    
        const square = /*html*/`
            <form id="form">
                <div class="divisor">
                    <label for="lado" class="label">Cent&iacute;metros del lado</label>
                    <input type="number" name="lado" id="lado">
                </div>
                <div class="divisor">
                    <button type="submit">Calcular</button>
                </div>
            </form>
        `;
        document.getElementById("ex-active").innerHTML = square;
    
        /* Se hacen los calculos del area del circulo y se muestran en pantalla. */
    
        document.querySelector("#form").addEventListener("submit", e => {
            e.preventDefault();
            e.stopPropagation();
            let lado = document.getElementById("lado").value;
    
            if(lado == ""){
                alert("Favor completar los datos requeridos.");
                return;
            }
    
            let area = Math.pow(lado,2);
            const result = /*html*/`
                <div class="divisor">
                    <p class="description">El &aacute;rea del cuadrado es ${area} cm<sup>2</sup>.</p>
                </div>
            `;
            document.getElementById("lado").value = "";
            document.getElementById("result").innerHTML = result;
        });
    });

    /* Área del Rectángulo */

    document.querySelector("#rectangle").addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
    
        const rectangle = /*html*/`
            <form id="form">
                <div class="divisor">
                    <label for="base" class="label">Base en cm</label>
                    <input type="number" name="base" id="base">
                </div>
                <div class="divisor">
                    <label for="altura" class="label">Altura en cm</label>
                    <input type="number" name="altura" id="altura">
                </div>
                <div class="divisor">
                    <button type="submit">Calcular</button>
                </div>
            </form>
        `;
        document.getElementById("ex-active").innerHTML = rectangle;
    
        /* Se hacen los calculos del area del circulo y se muestran en pantalla. */
    
        document.querySelector("#form").addEventListener("submit", e => {
            e.preventDefault();
            e.stopPropagation();
            let base = document.getElementById("base").value;
            let altura = document.getElementById("altura").value;

            if(base == "" || altura ==""){
                alert("Favor completar los datos requeridos.");
                return;
            }
    
            let area = base * altura;
            const result = /*html*/`
                <div class="divisor">
                    <p class="description">El &aacute;rea del rect&aacute;ngulo es ${area} cm<sup>2</sup>.</p>
                </div>
            `;
            document.getElementById("base").value = "";
            document.getElementById("altura").value = "";
            document.getElementById("result").innerHTML = result;
        });
    });
});

function exercise2(){
    return /*html*/`
    <div class="areas">
        <button class="btn" id="circle">C&iacute;rculo</button>
        <button class="btn" id="square">Cuadrado</button>
        <button class="btn" id="rectangle">Rect&aacute;ngulo</button>
    </div>
`;
}
