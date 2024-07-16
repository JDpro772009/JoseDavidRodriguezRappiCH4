// punto 1

let valor1 = document.querySelector(".valor1")
let valor2 = document.querySelector(".valor2")
let resultado = document.querySelector(".resultado")
let medir = document.querySelector(".medir")

medir.addEventListener("click", ()=>{
    let operacion = valor2.value / Math.pow(valor1.value, 2)
    resultado.value = operacion * 10000
})

// punto 2

let moneda1 = document.querySelector(".moneda1")
let moneda2 = document.querySelector(".moneda2")

moneda1.value =  1
moneda2.value = 5087.240

moneda1.addEventListener("keyup", ()=>{
    let op1 = moneda1.value * 5087.24
    moneda2.value = op1.toFixed(2)
})
moneda2.addEventListener("keyup", ()=>{
    let op2 = moneda2.value * 0.00020
    moneda1.value = op2.toFixed(2)
})

// punto 3

let idGlobal = 1;
let notas = [];
let titulo = document.querySelector(".nombre");
let texto = document.querySelector(".area");
let guardar = document.querySelector(".guardar");
let borrar = document.querySelector(".borrar");

let cajaP = document.querySelector(".cartas");
let palabra = document.createElement("h4");
if (notas.length === 0) { 
    palabra.textContent = "NO HAY CARTAS PARA MOSTRAR";
    cajaP.appendChild(palabra);
}

function crearNota() {
    let carta = document.createElement("div");
    let nuevaNota = {
        id: idGlobal,
        titulo: titulo.value,
        texto: texto.value,
        realizada: false
    };
    
    notas.push(nuevaNota);

    carta.setAttribute("class", "card text-center cards");
    carta.innerHTML = `<div class="card-header">
                       <input onClick="marcarRealizada(${nuevaNota.id})" type="checkbox" ${nuevaNota.realizada ? "checked" : ""} class="chekear">
                      <label for="chekear">${nuevaNota.titulo}</label>
                    </div>
                    <div class="card-body">
                      <p class="card-text">${nuevaNota.texto}</p>
                    </div>
                      <button type="button" class="btn btn-danger borrarN" onclick="borrarNota(${nuevaNota.id})">Borrar</button>`;
                      
    cajaP.appendChild(carta);

    idGlobal++;
    
    borrarText()
    

    cajaP.removeChild(palabra);

}


let agregarNota = () => {
    if (titulo.value.trim() === "") {
        titulo.value = "";
        titulo.setAttribute("placeholder", "No has agregado nada en este campo");
    } else if (texto.value.trim() === "") {
        texto.value = "";
        texto.setAttribute("placeholder", "No has agregado nada en este campo");
    } else {

        crearNota();

    }
   
   
};


function borrarNota(id) {
    notas = notas.filter(note => note.id !== id);
    applyFilters();
}

let borrarText = () => {
    titulo.value = "";
    texto.value = "";
};

borrar.addEventListener("click", borrarText);
guardar.addEventListener("click", agregarNota);

function marcarRealizada(id) {
    let note = notas.find(note => note.id === id);
    if (note) {
        note.realizada = !note.realizada;
    }
    applyFilters();
}

function filterByCompleted(array) {
    return array.filter(note => note.realizada);
}

function filterByText(array, text) {
    if (!text) return array;
    return array.filter(note => note.titulo.includes(text) || note.texto.includes(text));
}

function applyFilters() {
    const searchText = document.querySelector(".buscar").value;
    const filterCompleted = document.querySelector(".realizadas").checked;

    let filteredNotes = notas;
    if (filterCompleted) {
        filteredNotes = filterByCompleted(filteredNotes);
    }
    filteredNotes = filterByText(filteredNotes, searchText);

    renderNotes(filteredNotes);
}

function renderNotes(notas) {
    const container = document.querySelector(".cartas");
    container.innerHTML = '';

    notas.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note card text-center cards' + (note.realizada ? ' completed' : '');
        noteElement.innerHTML = `
            <div class="card-header">
                <input onClick="marcarRealizada(${note.id})" type="checkbox" ${note.realizada ? "checked" : ""} class="chekear">
                <label for="chekear">${note.titulo}</label>
            </div>
            <div class="card-body">
                <p class="card-text">${note.texto}</p>
            </div>
            <button type="button" class="btn btn-danger borrarN" onclick="borrarNota(${note.id})">Borrar</button>
        `;
        container.appendChild(noteElement);
    });

    if (notas.length === 0) {
        palabra.textContent = "NO HAY CARTAS PARA MOSTRAR";
        container.appendChild(palabra);
    }
}

document.querySelector(".buscar").addEventListener('input', applyFilters);
document.querySelector(".realizadas").addEventListener('change', applyFilters);

renderNotes(notas);