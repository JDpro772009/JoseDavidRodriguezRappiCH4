import {inicializarFiltros,aplicarFiltros} from "../modules/funciones.js";

export let caja = document.querySelector(".agregar");

export let arrFilt = [];
export let arrObjetos = [];
export let buscar = document.querySelector(".buscar");
// export let fecha = data.currentDate;

fetch("https://aulamindhub.github.io/amazing-api/events.json")
    .then(response => response.json())
    .then(data => {
      
        inicializarFiltros(data);
        aplicarFiltros(data); // Mostrar todos los eventos al cargar
    });