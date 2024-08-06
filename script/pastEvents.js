 import {inicializarFiltrosPast,aplicarFiltrosPast} from "../modules/funciones.js";

export let cajaPast = document.querySelector(".agregar");

export let arrFiltPast = [];
export let arrObjetosPast = [];
export let buscarPast = document.querySelector(".buscar");
// export let fecha = data.currentDate;

fetch("https://aulamindhub.github.io/amazing-api/events.json")
    .then(response => response.json())
    .then(data => {
      console.log(data.events[2].date);
      
      let arrayPast = {}
      arrayPast.events = []
      for (let index = 0; index < data.events.length; index++) {
        
        if(data.events[index].date < data.currentDate){
          arrayPast.events.push(data.events[index])
          
        }
        
      }
      
      console.log(arrayPast);
      
        inicializarFiltrosPast(arrayPast);
        aplicarFiltrosPast(arrayPast); // Mostrar todos los eventos al cargar
    });