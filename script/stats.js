let maxAsis = document.querySelector(".maxAsis");
let minAsis = document.querySelector(".minAsis");
let maxCap = document.querySelector(".maxCap");

let catUp = document.querySelector(".categoriasUp");

// Definimos la fecha actual
let currentDate = new Date();

fetch("https://aulamindhub.github.io/amazing-api/events.json")
.then(response => response.json())
.then(data => {
    let events = data.events;

    // Filtrar eventos con asistencia
    let eventsWithAssistance = events.filter(event => event.assistance);

    // Ordenar eventos por porcentaje de asistencia
    let sortedByAssistance = [...eventsWithAssistance].sort((a, b) => (b.assistance / b.capacity) - (a.assistance / a.capacity));
    let sortedByCapacity = [...events].sort((a, b) => b.capacity - a.capacity);

    // Obtener el evento con más y menos asistencia, y el de mayor capacidad
    let maxAssistanceEvent = sortedByAssistance[0];
    let minAssistanceEvent = sortedByAssistance[sortedByAssistance.length - 1];
    let maxCapacityEvent = sortedByCapacity[0];

    // Colocar los datos en la tabla
    maxAsis.textContent = `${maxAssistanceEvent.name} (${((maxAssistanceEvent.assistance / maxAssistanceEvent.capacity) * 100).toFixed(2)}%)`;
    minAsis.textContent = `${minAssistanceEvent.name} (${((minAssistanceEvent.assistance / minAssistanceEvent.capacity) * 100).toFixed(2)}%)`;
    maxCap.textContent = `${maxCapacityEvent.name} (${maxCapacityEvent.capacity})`;

    // Filtrar eventos futuros
    let futureEvents = [...new Set(data.events.map(evento => evento.category))]
    console.log(futureEvents);

    for(let i = 0; i < futureEvents.length; i++){
      let categoria = futureEvents[i]
      let arrObjUp = {}
      let row = document.createElement("tr")
      row.innerHTML = `
            
                <td>${categoria}</td>
                <td></td>
                <td></td>
            `
      catUp.appendChild(row)
      // for(let j = 0; j < data.events.length;j++){

      //   if(categoria == data.events[j].category && data.events[j].date > data.currentDate){
          
          
          
      //   }
      // }
    }
    

})
let apiUrl = "https://aulamindhub.github.io/amazing-api/events.json";


// Hacemos una solicitud fetch a la API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        let events = data.events;

        // Objeto para almacenar las sumatorias de precios por categoría
        let categoryPrices = {};

        // Recorremos los eventos para sumar los precios por categoría
        events.forEach(event => {
            if (!categoryPrices[event.category]) {
                categoryPrices[event.category] = 0;
            }
            categoryPrices[event.category] += event.price;
        });

        // Mostramos las sumatorias de precios por categoría en la consola
        console.log("Sumatorias de precios por categoría:");
        for (let category in categoryPrices) {
            console.log(`${category}: $${categoryPrices[category].toFixed(2)}`);
            
           
        }
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });