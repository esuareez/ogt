let to_do_list = [];

document.querySelector(".addto").addEventListener("click", function(evt){
    evt.preventDefault();
    let homework = document.getElementById("tarea").value;
    if(homework.trim() === ""){
        alert("Campo obligatorio.");
        return;
    }
    const to_do = {
        tarea: homework,
        estado: 0
    };
    document.getElementById("tarea").value = "";
    to_do_list.push(to_do);
    create_list();
});

function create_list(){
    to_do_list.sort(SortArray);
    let list = "<table class='table'><thead><tr><th>Tarea</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>"
    for(let i = 0; i < to_do_list.length; i++){
        if(to_do_list[i].estado == 0){ 
            list += `<tr style='background-color:lightyellow;'><td>${to_do_list[i].tarea}</td>
                        <td>Pendiente</td>
                     <td>
                            <button class="btn btn-success" onclick="success(${i})"><i class="bi bi-check-lg"></i></button>
                            <button class="btn btn-danger" onclick="dlete(${i})"><i class="bi bi-trash"></i></button>
                        </td>
                        
                    </tr>`; 
        }else if(to_do_list[i].estado == 1){
            list += `<tr style='background-color:lightgreen;'><td>${to_do_list[i].tarea}</td>
            <td>Completado</td>
            <td>
                <button class="btn btn-warning" onclick="pending(${i})"><i class="bi bi-clock"></i></button>
                <button class="btn btn-danger" onclick="dlete(${i})"><i class="bi bi-trash"></i></button>
            </td>
            </tr>`;
        }
    }
    list += "</tbody></table>";
    document.getElementById("list").innerHTML = list;
    document.getElementById("switch1").innerHTML = `<p></>`;
    document.getElementById("switch").innerHTML =  `<button class="deleted" id="switch">Lista con eliminados</button>`;
}

document.querySelector(".switch").addEventListener("click",function(){
    to_do_list.sort(SortArray);
    let list = "<table class='table'><thead><tr><th>Tarea</th><th>Estado</th></tr></thead><tbody>"
    for(let i = 0; i < to_do_list.length; i++){
        if(to_do_list[i].estado == 0){
            list += `<tr style='background-color:lightyellow;'><td>${to_do_list[i].tarea}</td>
            <td>Pendiente</td>
            </tr>`; 
        }else if(to_do_list[i].estado == 1){ 
            list += `<tr style='background-color:lightgreen;'><td>${to_do_list[i].tarea}</td>
                        <td>Completado</td>
                    </tr>`;
        }else if(to_do_list[i].estado == -1){
            list += `<tr style='background-color:lightcoral;'><td>${to_do_list[i].tarea}</td>
                        <td>Eliminado</td>
                    </tr>`;
        }
    }
    list += "</tbody></table>";
    document.getElementById("list").innerHTML = list;
    document.getElementById("switch").innerHTML = `<p></>`;
    document.getElementById("switch1").innerHTML =  `<button class="active" id="switch1">Lista sin eliminados</button>`;
});

document.querySelector("#switch1").addEventListener("click",function(){
    create_list();
});

function success(index){
    (to_do_list[index].estado == 0) ? to_do_list[index].estado = 1 : to_do_list[index].estado = 0;
    create_list();
}

function pending(index){
    (to_do_list[index].estado == 1) ? to_do_list[index].estado = 0 : to_do_list[index].estado = 1;
    create_list();
} 

function dlete(index){
    (to_do_list[index].estado == 1 || to_do_list[index].estado == 0) ? to_do_list[index].estado = -1 : to_do_list[index].estado = -1;
    create_list();
}

function SortArray(x, y){
    if (x.estado < y.estado) {return -1;}
    if (x.estado > y.estado) {return 1;}
    return 0;
}