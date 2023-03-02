//Menu lateral
if("nav"){
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
    menu.style.display = "block";
    menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = "false";
    }
}}

//barras de porcentaje
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//selecciono todas las barras
let controldecalidad = document.getElementById("controldecalidad");
crearBarra(controldecalidad);
let evaluacionderiesgo = document.getElementById("evaluacionderiesgo");
crearBarra(evaluacionderiesgo);
let controlambiental = document.getElementById("controlambiental");
crearBarra(controlambiental);

//Pintamos las barras


function pintarBarra(id_barra,cantidad, indice, interval){
    contadore[indice]++;
    if(x <cantidad){
        let elementos = id_barra.getElementByIdClassName("e");
        elementos[x].style.backgroundColor = "black";
    }else{
        clearInterval(interval)
    }
}
