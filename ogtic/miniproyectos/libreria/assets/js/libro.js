import Libro from "./main.js";

let libros = [];

document.querySelector("#form").addEventListener("submit", e => {
    e.preventDefault();
    e.stopPropagation();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let type = document.getElementById("type").value;

    if(title.trim() === "" || author.trim() === "" || year === "" || type.trim() === ""){
        alert('Favor llenar el formulario.');
        return;
    }

    if(year < 1000){
        alert('El año debe contener más de 4 dígitos.');
        return;
    }

    let lib = new Libro(title.trim(),author.trim(),year,type.trim());

    document.getElementById("result").innerHTML = /*html*/`
        <p>T&iacute;tulo: ${lib.getAuthor}</p>
        <p>Autor: ${lib.getTitle}</p>
        <p>A&ntilde;o: ${lib.getYear}</p>
    `;

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
    document.getElementById("type").value = "";

    libros.push(lib);
    console.log(libros);
});

document.querySelector("#view").addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    let table = /*html*/`
    <table class="table">
        <thead>
            <tr>
                <th>T&iacute;tulo</th>
                <th>Autor</th>
                <th>Tipo</th>
                <th>A&ntilde;o</th>
            </tr>
        </thead>
        <tbody>`;
    
    for(let i = 0; i < libros.length; i++){
        table += /*html*/`
            <tr>
                <td>${libros[i].title}</td>
                <td>${libros[i].author}</td>
                <td>${libros[i].type}</td>
                <td>${libros[i].year}</td>
            </tr>
        `;
    }

    table += /*html*/`
        </tbody>
    </table>
    `;
    document.getElementById("table").innerHTML = table;
});


