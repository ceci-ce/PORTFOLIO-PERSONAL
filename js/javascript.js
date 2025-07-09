let lanzador = "#menu-link";
let desplegable = ".main-menu";
let despliegaClase = "dropdown-menu";

function nav(){
    let lanz = document.querySelector(lanzador);
    lanz.addEventListener("click", despliegaMenu);
}

function despliegaMenu(){
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

nav();