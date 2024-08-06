// // Home

import {arrFilt} from "../script/home.js"
import {arrObjetos} from "../script/home.js"
import {buscar} from "../script/home.js"
import { caja } from "../script/home.js";




export function crearChecks(data) {

  let categorias = [...new Set(data.events.map(evento => evento.category))];
  let contenedorChecks = document.querySelector(".categorias");
  categorias.forEach(categoria => {
      let label = document.createElement("label");
      label.className = "form-check-label";
      label.textContent = categoria;

      let input = document.createElement("input");
      input.type = "checkbox";
      input.className = "form-check-input";
      input.value = categoria;
      input.addEventListener("change", () => aplicarFiltros(data));

      label.appendChild(input);
      contenedorChecks.appendChild(label);

  });
}

export function filtrarTexto(data) {

  console.log("hola");
  
  let texto = document.querySelector(".buscar").value.toLowerCase();
  return data.events.filter(evento => 
      evento.name.toLowerCase().includes(texto) || evento.description.toLowerCase().includes(texto)
  ); 
}

export function filtrarChecks(data) {

  let checkboxes = document.querySelectorAll(".form-check-input:checked");
  let categoriasSeleccionadas = Array.from(checkboxes).map(chk => chk.value);
  
  if (categoriasSeleccionadas.length > 0) {
      return data.events.filter(evento => 
          categoriasSeleccionadas.includes(evento.category)
      );
  } else {
      return data.events;
  }
}

export function aplicarFiltros(data) {
    
  let filtradosPorTexto = filtrarTexto(data);
  let filtradosPorChecks = filtrarChecks(data);
  
  // Combina los resultados de ambos filtros
  let filtradosCombinados = filtradosPorTexto.filter(evento => 
      filtradosPorChecks.includes(evento)
  );
  
  
  
  pintar({ events: filtradosCombinados });
  if(caja.innerHTML == ""){
    let h4 = document.createElement("h4")
    h4.textContent = "No hay tarjetas para mostrar :["
    caja.appendChild(h4)
    
  }

}

export function pintar(data) {
  let caja = document.querySelector(".agregar");
  caja.innerHTML = ""; // Limpia antes de agregar nuevos elementos
  data.events.forEach(evento => {
      let div = document.createElement("div");
      div.className = "card m-2";
      div.style.width = "18rem";
      div.innerHTML = `<img src=${evento.image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title titulos">${evento.name}</h5>
                <p class="card-text descripciones">${evento.description}</p>
                <div class="precio d-flex justify-content-around flex-wrap">
                  <h4 class="valor">${evento.price + "$"}</h4>
                <a href="./Details.html?name=${evento.name}&description=${evento.description}&date=${evento.date}&category=${evento.category}&place=${evento.place}&capacity=${evento.capacity}&assistance=${evento.assistance}&price=${evento.price}&image=${evento.image}&currentDate=${data.currentDate}&estimate=${evento.estimate}" class="btn btn-primary">Details</a>
                </div>
              </div>
      `;
      caja.appendChild(div);
     
  });
}


export function inicializarFiltros(data) {
  crearChecks(data);
  document.querySelector(".buscar").addEventListener("keyup", () => aplicarFiltros(data));
}

// Upcoming Events

import {arrFiltUp} from "../script/upcomingEvent.js"
import {arrObjetosUp} from "../script/upcomingEvent.js"
import {buscarUp} from "../script/upcomingEvent.js"
import { cajaUp } from "../script/upcomingEvent.js";


export function crearChecksUp(data) {

  let categorias = [...new Set(data.events.map(evento => evento.category))];
  let contenedorChecks = document.querySelector(".categorias2");
  categorias.forEach(categoria => {
      let label = document.createElement("label");
      label.className = "form-check-label";
      label.textContent = categoria;

      let input = document.createElement("input");
      input.type = "checkbox";
      input.className = "form-check-input";
      input.value = categoria;
      input.addEventListener("change", () => aplicarFiltrosUp(data));

      label.appendChild(input);
      contenedorChecks.appendChild(label);

  });
}

export function filtrarTextoUp(data) {

  console.log("hola");
  
  let texto = document.querySelector(".buscar").value.toLowerCase();
  return data.events.filter(evento => 
      evento.name.toLowerCase().includes(texto) || evento.description.toLowerCase().includes(texto)
  );
}

export function filtrarChecksUp(data) {

  let checkboxes = document.querySelectorAll(".form-check-input:checked");
  let categoriasSeleccionadas = Array.from(checkboxes).map(chk => chk.value);
  
  if (categoriasSeleccionadas.length > 0) {
      return data.events.filter(evento => 
          categoriasSeleccionadas.includes(evento.category)
      );
  } else {
      return data.events;
  }
}

export function aplicarFiltrosUp(data) {
    
  let filtradosPorTexto = filtrarTextoUp(data);
  let filtradosPorChecks = filtrarChecksUp(data);
  
  // Combina los resultados de ambos filtros
  let filtradosCombinados = filtradosPorTexto.filter(evento => 
      filtradosPorChecks.includes(evento)
  );
  
  pintarUp({ events: filtradosCombinados });
  if(cajaUp.innerHTML == ""){
    let h4 = document.createElement("h4")
    h4.textContent = "No hay tarjetas para mostrar :["
    cajaUp.appendChild(h4)
    
  }
}

export function pintarUp(data) {
  let caja = document.querySelector(".agregar");
  caja.innerHTML = ""; // Limpia antes de agregar nuevos elementos
  data.events.forEach(evento => {
      let div = document.createElement("div");
      div.className = "card m-2";
      div.style.width = "18rem";
      div.innerHTML = `
          <img src=${evento.image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title titulos">${evento.name}</h5>
                <p class="card-text descripciones">${evento.description}</p>
                <div class="precio d-flex justify-content-around flex-wrap">
                  <h4 class="valor">${evento.price}$</h4>
                <a href="./Details.html?name=${evento.name}&description=${evento.description}&date=${evento.date}&category=${evento.category}&place=${evento.place}&capacity=${evento.capacity}&assistance=${evento.assistance}&price=${evento.price}&image=${evento.image}&currentDate=${data.currentDate}&estimate=${evento.estimate}" class="btn btn-primary">Details</a>
                </div>
              </div>
      `;
      caja.appendChild(div);
  });
}


export function inicializarFiltrosUp(data) {
  crearChecksUp(data);
  document.querySelector(".buscar").addEventListener("keyup", () => aplicarFiltrosUp(data));
}


// Past Events

import {arrFiltPast} from "../script/pastEvents.js"
import {arrObjetosPast} from "../script/pastEvents.js"
import {buscarPast} from "../script/pastEvents.js"
import { cajaPast } from "../script/pastEvents.js";


export function crearChecksPast(data) {

  let categorias = [...new Set(data.events.map(evento => evento.category))];
  let contenedorChecks = document.querySelector(".categorias3");
  categorias.forEach(categoria => {
      let label = document.createElement("label");
      label.className = "form-check-label";
      label.textContent = categoria;

      let input = document.createElement("input");
      input.type = "checkbox";
      input.className = "form-check-input";
      input.value = categoria;
      input.addEventListener("change", () => aplicarFiltrosPast(data));

      label.appendChild(input);
      contenedorChecks.appendChild(label);

  });
}

export function filtrarTextoPast(data) {


  
  let texto = document.querySelector(".buscar").value.toLowerCase();
  return data.events.filter(evento => 
      evento.name.toLowerCase().includes(texto) || evento.description.toLowerCase().includes(texto)
  );
}

export function filtrarChecksPast(data) {

  let checkboxes = document.querySelectorAll(".form-check-input:checked");
  let categoriasSeleccionadas = Array.from(checkboxes).map(chk => chk.value);
  
  if (categoriasSeleccionadas.length > 0) {
      return data.events.filter(evento => 
          categoriasSeleccionadas.includes(evento.category)
      );
  } else {
      return data.events;
  }
}

export function aplicarFiltrosPast(data) {

    
  let filtradosPorTexto = filtrarTextoPast(data);
  let filtradosPorChecks = filtrarChecksPast(data);
  

  let filtradosCombinados = filtradosPorTexto.filter(evento => 
      filtradosPorChecks.includes(evento)
  );
  
  pintarPast({ events: filtradosCombinados });
  if(cajaPast.innerHTML == ""){
    let h4 = document.createElement("h4")
    h4.textContent = "No hay tarjetas para mostrar :["
    cajaPast.appendChild(h4)
    
  }
}

export function pintarPast(data) {
  let caja = document.querySelector(".agregar");
  caja.innerHTML = ""; 
  data.events.forEach(evento => {
      let div = document.createElement("div");
      div.className = "card m-2";
      div.style.width = "18rem";
      div.innerHTML = `
          <img src=${evento.image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title titulos">${evento.name}</h5>
                <p class="card-text descripciones">${evento.description}</p>
                <div class="precio d-flex justify-content-around flex-wrap">
                  <h4 class="valor">${evento.price}$</h4>
                <a href="./Details.html?name=${evento.name}&description=${evento.description}&date=${evento.date}&category=${evento.category}&place=${evento.place}&capacity=${evento.capacity}&assistance=${evento.assistance}&price=${evento.price}&image=${evento.image}&currentDate=${data.currentDate}&estimate=${evento.estimate}" class="btn btn-primary">Details</a>
                </div>
              </div>
      `;
      caja.appendChild(div);
  });
}


export function inicializarFiltrosPast(data) {
  crearChecksPast(data);
  document.querySelector(".buscar").addEventListener("keyup", () => aplicarFiltrosPast(data));
}
