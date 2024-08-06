import {inicializarFiltrosUp,aplicarFiltrosUp} from "../modules/funciones.js";

export let cajaUp = document.querySelector(".agregar");

export let arrFiltUp = [];
export let arrObjetosUp = [];
export let buscarUp = document.querySelector(".buscar");
// export let fecha = data.currentDate;

fetch("https://aulamindhub.github.io/amazing-api/events.json")
    .then(response => response.json())
    .then(data => {
      console.log(data.events[2].date);
      
      let arrayUpcoming = {}
      arrayUpcoming.events = []
      for (let index = 0; index < data.events.length; index++) {
        
        if(data.events[index].date > data.currentDate){
          arrayUpcoming.events.push(data.events[index])
          
        }
        
      }
      
      console.log(arrayUpcoming);
      
        inicializarFiltrosUp(arrayUpcoming);
        aplicarFiltrosUp(arrayUpcoming); // Mostrar todos los eventos al cargar
    });